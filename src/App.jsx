
import './App.css'
import { Typography, Box, Button, Stack, ImageList } from '@mui/material';
import instagram from './assets/instagram.png';
import discord from './assets/discord.png';
import github from './assets/github.png';
import logo from './assets/logo.png';
import work from './assets/work.png'
import {TypeAnimation} from 'react-type-animation';

function App() {
  

  return (
    
    <div className="App">
      
      <Typography variant='h2' sx={{ color: '#fff', fontWeight: 'bold',fontSize:{md:40,xs:30},mb:2 }}>We are</Typography>
      
      <TypeAnimation
        sequence={[
          'CONNECTING FUTURE', 1000, 'SOLVING PROBLEMS', 1000, 'BUILDING SOFTWARES',1000, 'EXPLORING NEW TECH',
          1000,"SOPERDEV",2000
        ]}
                   //  Continuing previous Text
    style={{ fontSize: '40px',color:'#116DFF',fontFamily:'arial',marginTop:20}}
    wrapper={'strong'}
    speed={1}
    repeat={Infinity} 
      />
      <Box>
      <Typography variant='h2' sx={{ color: '#fff', fontWeight: 'bold',fontSize:{md:25,xs:20},mt:10 }}>You've got the ideas or problems.</Typography>
        <Typography variant='h2' sx={{ color: '#fff', fontWeight: 'bold', fontSize: { md: 25, xs: 20 } }}>Well, we've solution.</Typography>
        <Button variant='outlined' sx={{mt:3,fontWeight:'bold'}} href='mailto:team@soperdev.com?subject=I have got an idea or problem'>Write to us</Button>
      </Box>
      <Stack sx={{height:'auto',width:{md:1000,xs:0}}}>
      <img src={work} />
      </Stack>
      
      <Stack >
        <Typography variant='h2' sx={{ color: '#fff', fontWeight: 'bold', fontSize: { md: 50, xs: 30 }, textAlign: 'left', mt: { xs: 10 ,md:0} }}>We love</Typography>
        <Typography variant='h2' sx={{  fontWeight: 'bold', fontSize: { md: 50, xs: 30 }, textAlign: 'left', color: '#116DFF' }}>building together</Typography>
        <Typography variant='h1' sx={{fontWeight: 'bold',fontSize:{md:20,xs:15},textAlign:'left',color:'#fff'}}>Join open collaborative projects. </Typography>
        <Typography variant='h1' sx={{fontWeight: 'bold', fontSize: { md: 20, xs: 15 }, textAlign: 'left', color: '#fff' }}>Learn, teach and help millions of people. </Typography>
        
        <Stack sx={{ mt: 5, alignItems: 'center', flexDirection: { md: 'row' } }}>
          
          <Stack sx={{ border: 2,width:{md:250,xs:200},alignItems:'center',borderColor:'#fff',padding:5,borderTopLeftRadius:20,borderBottomRightRadius:20,backgroundColor:'' }}>
            <Stack sx={{ height: "auto", width: 200 }}><img src={github} /></Stack>
            <Typography sx={{ color: '#116DFF', fontWeight: 'bold', fontSize:{md: 30,xs:22},mt:1 }}>Have a look at our</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: { md: 25, xs: 20 } }}>Github Organisation</Typography>
            <Typography sx={{ color: '#fff', fontSize: { md: 20, xs: 18 }, mt: 2, mb: 3 }}>With over 10+ newly launched projects and packages.</Typography>
            <Button variant='contained' href='https://bit.ly/3V2JTkK'>Visit Github</Button>
          </Stack>

          <Stack sx={{ border: 2,width:{md:250,xs:200},alignItems:'center',borderColor:'#fff',padding:5,borderTopLeftRadius:20,borderBottomRightRadius:20,ml:{md:2,xs:0},mt:{xs:2,md:0} }}>
            <Stack sx={{ height: "auto", width: 200 }}><img src={discord} /></Stack>
            <Typography sx={{ color: '#116DFF', fontWeight: 'bold', fontSize:{md: 25,xs:20},mt:1 }}>Join our collaborative</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: { md: 22, xs: 18 } }}>community on Discord</Typography>
            <Typography sx={{ color: '#fff', fontSize: { md: 18, xs: 18 }, mt: 2, mb: 3 }}>Build awesome projects with professionals & developers and contribute to modern technology.</Typography>
            <Button variant='contained' href='https://bit.ly/3uRGF9e'>Join Discord</Button>
          </Stack>

          <Stack sx={{ border: 2,width:{md:250,xs:200},alignItems:'center',borderColor:'#fff',padding:5,borderTopLeftRadius:20,borderBottomRightRadius:20,ml:{md:2,xs:0},mt:{xs:2,md:0} }}>
            <Stack sx={{ height: "auto", width: 200 }}><img src={instagram} /></Stack>
            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize:{md: 22,xs:18},mt:1 }}>Stay updated with us on</Typography>
            <Typography sx={{ color: '#BE00A2', fontWeight: 'bold', fontSize: { md: 22, xs: 20 } }}>Instagram</Typography>
            <Typography sx={{ color: '#fff', fontSize: { md: 20, xs: 18 }, mt: 2, mb: 3 }}>Get valuable content on new technologies and updates about SOPERDEV.</Typography>
            <Button variant='contained' href="https://www.instagram.com/so_per_dev/">Follow Us</Button>
          </Stack>

        </Stack>
      </Stack>

      <Stack sx={{ backgroundColor: '#000', mt: 10, border: 2, borderRadius: 20, alignItems: 'center',borderColor:'#C4E4FD' }}>
        <Stack sx={{flexDirection:{md:'row',xs:'column'}}}>
        <Stack sx={{m:5,textAlign:'left',alignSelf:"flex-start",mb:0}}>
          <a>About Us</a>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
          <a>Payment & Refund Policy</a>
          </Stack>

        <Stack sx={{ml:5,mt:{md:5,xs:2},textAlign:'left'}}>
            <Typography sx={{ color: '#Fff', fontWeight: "bold",fontSize:{xs:0,md:15} }}>Important Links:</Typography>
            <Typography sx={{ color: '#Fff',fontSize:{xs:0,md:15} }}>Discord : <a href='https://bit.ly/3uRGF9e'>bit.ly/3uRGF9e</a></Typography>
            <Typography sx={{ color: '#fff',fontSize:{xs:0,md:15} }}>GRootJS : <a href='https://bit.ly/3FAzM14'>bit.ly/3FAzM14</a></Typography>
            <Typography sx={{ color: '#fff',fontSize:{xs:0,md:15} }}>Github Org : <a href='https://bit.ly/3V2JTkK'>bit.ly/3V2JTkK</a></Typography>
            
      </Stack>

          <Stack sx={{ml:5,mt:{md:5,xs:2},textAlign:'left'}}>
            <Typography sx={{ color: '#Fff', fontWeight: "bold" }}>Contact Info:</Typography>
            <Typography sx={{ color: '#Fff' }}>Email : <a href='mailto:team@soperdev.com'>team@soperdev.com</a></Typography>
            <Typography sx={{color:'#fff'}}>Message us on : <a href="https://www.instagram.com/so_per_dev/">Instagram</a></Typography>
      </Stack>
        </Stack>

        <Stack sx={{height:'auto',width:{md:200,xs:50}}}>
          <img src={logo} /> 
        </Stack>
        <Typography sx={{ fontSize: { md: 30, xs: 20 }, color: '#fff' }}>© 2022, SOPERDEV </Typography>
        <Typography sx={{fontSize:{md:15,xs:10},color:'#fff'}}>v.1.5.0</Typography>
      </Stack>
    </div>
  )
}

export default App;
