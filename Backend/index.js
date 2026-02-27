const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;
/**
 GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
 POST /user - เพิ่มผู้ใช้ใหม่
 GET /user/:id - ดึงข้อมูลผู้ใช้ตาม ID
 PUT /user/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
 DELETE /user/:id - ลบผู้ใช้ตาม ID ที่บันทึก
 */

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}


app.get('/testdb-new', async (req, res) => {
    try {
        const results = await conn.query('SELECT * FROM users');
        res.json(results[0]);
    } catch (err) {
        console.error('Error connecting to the database:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// path: = GET /users สำหรับดึงข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

// path: = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try{
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: "User added successfully",
            data: results[0]
        });
    }catch(err){
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Error adding user' });
    }
})

// path: = GET /user/:id สำหรับดึงข้อมูล user ตาม id
 app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if(results[0].length === 0){
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(results[0][0]);
    }catch(err){
        console.error('Error fetching user:', err);
        let statusCode = err.statusCode || 500;
        res.status(statusCode).json({
            error: err.message || 'Error fetching user'
        })
    }
})

//path: = PUT /users/:id สำหรับแก้ไขข้อมูล user ตาม id
app.put('/users/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.json({
        message: "User updated successfully",
        data: results[0]
         });
    }catch(err){
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Error updating user' });
    }
})

//path: = DELETE /users/:id สำหรับลบ user ตาม id
app.delete ('/users/:id', async (req, res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            message: "User deleted successfully",
            data: results[0]
        });
    }catch(err){
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Error deleting user' });
    }
})

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;
    // หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // อัพเดทข้อมูล users
    if (updatedUser.firstname) {
        users[selectedIndex].firstname = updatedUser.firstname;
    }
    if (updatedUser.lastname) {
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({
        message: "User updated successfully",
        data: {
            user: users[selectedIndex],
            indexUpdate: selectedIndex
        }
    });
    // ส่ง users ที่อัพเดทแล้วกลับไป
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;

    // หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    // ลบ user ออกจาก users
    users.splice(selectedIndex, 1);

    res.json({
        message: "User deleted successfully",
        indexDelete: selectedIndex
    });

})

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on port on http://localhost:${port}`);
})