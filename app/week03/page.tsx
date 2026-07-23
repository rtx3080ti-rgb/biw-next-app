import Header from "../components/header";
import Footer from "../components/footer";
import { toDoList } from "../data/toDoList"; 


export default function ToDoList(){

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

    const tmpTdl = toDoList.map((item,index) =>
        <>
        <div className="max-w-sm mx-auto bg-white dark:bg-slate-800 border-8 border-double border-8 border-blue-700 shadow-xl overflow-hidden mt-10 mb-15 p-6 outline-4 outline-offset-2 outline-blue-700  bg-gradient-to-r from-pink-300 to-blue-300" key={index}>
        <span>หัวข้อ: {item.title}</span> <br></br>
        <span>คำอธิบาย: {item.desc}</span><br></br>
       <span>วันที่: {item.data_added}</span> <br></br>
        <span>ผู้เขียน: {item.author}</span><br></br>
        สถานะ: {Status(item.status)}
        </div>
        </>
    );
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
       <div>
        {tmpTdl}
       </div>
       </section>
        <Footer/>
        </>
    );
}