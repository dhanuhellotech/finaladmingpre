import React, { useEffect, useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Route, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "../ProtectedRoutes/Home";
import {useSelector,useDispatch} from "react-redux"
import { openMenu,closeMenu } from "../Redux/MenuSlice";
import Address from './../ProtectedRoutes/address/Address';
import Admission from './../ProtectedRoutes/admission/Admission';
import Blog from './../ProtectedRoutes/blogs/Blog';
import Enquiry from './../ProtectedRoutes/Enquiry/Enquiry';
import Franchise from './../ProtectedRoutes/franchise/Franchise';
import Newsletter from './../ProtectedRoutes/newletter/Newsletter';
import Class from '../ProtectedRoutes/summerclass/Class'
import Teacher from './../ProtectedRoutes/teachers/Teacher';
import Timetable from './../ProtectedRoutes/timetable/TimeTable';
import Tobbar from './../ProtectedRoutes/topbar/Topbar';
import Events from "../ProtectedRoutes/Events/Events";
import Calendar from "../ProtectedRoutes/calendar/Calendar.jsx"
import Contact from '../ProtectedRoutes/contact/Contact'
const DashboardLayout = ({ children,showMenu}) => {
  const dispatch = useDispatch()
  const [setnewDisplay, setsetNewDisplay] = useState(false)

  const displayData = useSelector(state=>state.menu.value.display)

  useEffect(()=>{
    console.log(displayData)
  },[displayData])
 
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={12}
        sm={0}
        sx={{
          display: { xs: displayData ? "block" : "none", sm: "none" },
          backgroundColor: "#FF8F6C",
          height: "100vh",
          boxShadow:"2px 2px 2px 0.3 black"
        }}
      >
        <Button onClick={()=>dispatch(closeMenu())}>
          <CloseIcon />
        </Button>
        {children}
      </Grid>
      <Grid
        item
        xs={0}
        sm={3}
        lg={2}
        sx={{
          backgroundColor: "#FF8F6C",
          height: "100vh",
          display: { xs: "none", sm: "block" },
        }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        lg={10}
        direction="column"
        sx={{ display: { xs: displayData ? "none" : "block", sm: "block" } }}
      >
        <Grid
          item
          sx={{
            height: { xs: "60px", sm: "0px" },
            display: { xs: displayData ? "none" : "block", sm: "none" },
          }}
        >
          <Box width="100%" height="100%" justifyContent="center">
            <Button onClick={()=>dispatch(openMenu())}>
              <MenuIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item p={2}height={'100vh'}sx={{overflowY:'scroll'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
       
            <Route path="/address" element={<Address/>}/>
            <Route path="/admission" element={<Admission/>}/>
            <Route path="/admission" element={<Admission/>}/>   
             <Route path="/blog" element={<Blog/>}/>
             <Route path="/calendar" element={<Calendar/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/enquiry" element={<Enquiry/>}/>
             <Route path="/franchise" element={<Franchise/>}/>
             <Route path="/class" element={<Class/>}/>
             <Route path="/teacher" element={<Teacher/>}/>
             <Route path="/timeTable" element={<Timetable/>}/>
             <Route path="/top" element={<Tobbar/>}/>
             <Route path="/events" element={<Events/>}/>
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
