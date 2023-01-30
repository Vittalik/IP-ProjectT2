import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image } from 'antd';
import { useState } from 'react';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


export default function Album() {


  const [visible, setVisible] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Image preview={{visible: false,}}
        width={265}
        src="https://i.pinimg.com/originals/51/08/b9/5108b9a395ed157d845f0fc3fc059e35.jpg"
        onClick={() => setVisible(true)} />
      <div style={{ display: 'none',}} >

        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src="https://i.pinimg.com/originals/51/08/b9/5108b9a395ed157d845f0fc3fc059e35.jpg" />
          <Image src="https://www.ocregister.com/wp-content/uploads/migration/m8b/m8b2j1-b78989863z.120120805162501000gr519k18k.1.jpg?w=620" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
                  <CardContent sx={{ flexGrow: 1 }}>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>



    </ThemeProvider>
  );
}