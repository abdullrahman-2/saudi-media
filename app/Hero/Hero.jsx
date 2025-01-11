"use client";
import Card from "react-bootstrap/Card";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
export default function Hero() {

  

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        marginTop: "12rem",
      }}
    >
      <video
        muted
        autoPlay
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "60em",
          zIndex: 1,
          objectFit: "cover",
        }}
      >
        <source src="imgs/NoOutro.mp4" type="video/mp4" />
      </video>
      <div style={{overflow:"hidden",width:"100%",height:"22rem",zIndex: 3 }}>

      <div className="sec1" style={{transform: `translate(${0}px, ${0}px)` }}>
        <div
          style={{
            fontSize: "4.5rem",
            lineHeight: "4.2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          <span style={{ margin: "1rem", display: "block", width: 100 }}>
           
          </span>
          <img src="icons/heroLogo.svg"/>
          <Typography  sx={{fontSize:50,fontWeight:600 }}> معرض مستقبل الاعلام</Typography>
        </div>

<div style={{display:"flex" ,justifyContent:"center",flexWrap:"wrap",width:"80%",gap:10}}>
        <Button
          sx={{
            padding: "40 40px",
             height: 50,
             width: "150px",
            fontWeight: "700",
            fontSize: "1rem",
            color: "#fff",
            border: "solid 1px",
            borderRadius: 3,
          }}
          variant="outlined"
        >
          سجل الآن
        </Button>
        <Button
          sx={{
            bgcolor: "#00695f",
            padding: "40 40px",
            width: "150px",
            height: 50,
            fontWeight: "700",
            fontSize: "1rem",
            color: "#fff",
            border: "none",
            borderRadius: 3,
          }}
          variant="contained"
        >
          احجز مساحتك
        </Button>
</div>
        <div style={{margin:"4rem 0 2rem 4rem",display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"60%"}} className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <InstagramIcon />
          <XIcon />
          <FacebookIcon />
        </div>

        </div>
        </div>
        <div
          style={{ display: "flex", gap: 12, margin: "10px 0",flexWrap:"wrap",zIndex:"3" }}
          className="section2"
        >
            <Card.Body style={{position:"relative",order:2}}>
            <Box sx={{position:"absolute",top:0,width:"100%",height:"100%",zIndex:1,opacity:1}}></Box>
            <Card.Title>
                <LocationOnIcon sx={{color:"#92d240",zIndex:3,opacity:2}}/>
              </Card.Title>
              <Card.Text sx={{color:"#92d240",zIndex:3,opacity:2}}>19 - 21 فبراير,</Card.Text>
              <Card.Text>2025</Card.Text>
             <Box sx={{bgcolor:"#05342e",opacity:.3}}>
               
              </Box>
            </Card.Body>

             <Card.Body style={{order:1}}>
              <Card.Text>
                <img src="imgs/logoDate183c.png" alt="Logo" />
              </Card.Text>
            </Card.Body>
 
             <Card.Body style={{order:2}}>
              <Card.Title>
                <AccessTimeIcon sx={{color:"#92d240"}} />
              </Card.Title>
              <Card.Text>الرياض,</Card.Text>
              <Card.Text>المملكة العربية السعودية</Card.Text>
            </Card.Body>
         </div>
     
    </section>
  );
}
