"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { dataItem , appendItem } from "../data/dataItem"; 
import { useState } from "react";

export default function ToDoList(){

    const toDoList = [...dataItem,...appendItem];
    const [tasks,setTasks] = useState(toDoList);
    const [numOFTasks,setNoft] = useState(tasks.length);
    const [status,setStatus] = useState(null);

    const fillteredTasks = 
        status == null ? tasks : 
        tasks.filter(
            (item) => item.status == status
        );



    let name = "Patipat Trakoonkjantarasiri";
    const major = "เทคโนโลยีสารสนเทศ (Information Technology)";
    let classyear = 2;
    let classSec = "ทส.ท.";
    let active = true;

    const  isActive = (act:boolean) => {
        if(act)
        return <span style={{color:"green"}}>กำลังศึกษาอยู่</span>;
        return <span style={{color:"red"}}>ไม่ได้เป็นนักศึกษาแล้ว</span>;

    }
    const  Status = (sta:boolean) => {
        if(sta)
        return <span style={{color:"green"}}>ทำแล้ว</span>;
        return <span style={{color:"red"}}>ยังไม่ได้ทำ</span>;
    }

    const tmpTdl =fillteredTasks.map((item,index) => {
        const {id ,title,desc,author,data_added,status } = item;
        
        return (<div className="max-w-sm mx-auto bg-white dark:bg-slate-800 border-8 border-double border-8 border-blue-700 shadow-xl overflow-hidden mt-10 mb-15 p-6 outline-4 outline-offset-2 outline-blue-700  bg-gradient-to-r from-pink-300 to-blue-300" key={id}>
        <span>หัวข้อ: {title}</span> <br></br>
        <span>คำอธิบาย: {desc}</span><br></br>
       <span>วันที่: {data_added}</span> <br></br>
        <span>ผู้เขียน: {author}</span><br></br>
        สถานะ: {Status(status)}
        </div>);
        
});

    const addTask = () => {
        const newTask = {
            id : tasks.length+1,
            title:"ทดสอบเพิ่มงาน",
            desc:"รายละเอียดของงานที่เพิ่ม",
            data_added:"13/08/2569",
            author:"Patipat_Biw",
            status: true
            };

        setTasks([...tasks, newTask]);
        setNoft(tasks.length+1);
    }

    console.log(`Name: ${name}`);
    console.log(`Major: ${major}`);

    return(
        <>
        <Header/>
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-50 py-15" style={{ backgroundImage: `url('/images/concert.jpg')` }}>
        <div className="max-w-sm mx-auto bg-white dark:bg-slate-800 border-8 border-double border-8 border-blue-700 shadow-xl overflow-hidden mt-40 mb-20 p-8 outline-4 outline-offset-2 outline-blue-700  bg-gradient-to-r from-pink-300 to-blue-300">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white text-shadow-lg/30">To Do Lists: </h3>
        <br></br>
        <p className="text-shadow-lg/20">
          ชื่อ-สกุล: {name} <br></br>
            สาขา: {major}<br></br>
            กลุ่มเรียน/ชั้นปี: {classSec}/ {classyear}<br></br>
            สถานะภาพนักศึกษา: {isActive(active)}
        </p>
        </div>

        <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="space-y-3 bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-full shadow-xs bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 translate-x-5 border-8 border-indigo-600">
            <div>งานที่ต้องทำ{numOFTasks} x รายการ</div>
            <div>
                <button onClick={addTask} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">เพิ่มงาน</button>
            </div>
            </div>
            <div className="space-y-2">
                <button onClick={() => setStatus(null)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-4 py-2.5 text-center leading-5 rounded-full">[A] All</button> 
                <button onClick={() => setStatus(true)} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">[C] Completed</button>
                <button onClick={() => setStatus(false)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">[P] Pending</button>
            </div>
        </div>    
       <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tmpTdl}
       </div>
       </section>
        <Footer/>
        </>
    );
}