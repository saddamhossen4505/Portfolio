import nodemailer from "nodemailer";

// SendMail.
export const mailSend = async ({ name, email, subject, text }) => {
  try {
    // Create Transport.
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send Mail.
    await transport.sendMail({
      from: `${email}`,
      to: process.env.MAIL_ID,
      subject: `${subject}`,
      html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email</title>
            
                <style>
                    *{
                        margin: 0px;
                        padding: 0px;
                    }
                    ul{
                        margin: 0px;
                        padding: 0px;
                    }
                    li{
                        list-style: none;
                    }
                    a{
                        text-decoration: none;
                    }
                    .main_wrapper{
                        background-color: #e9e9e9;
                        height: 100vh;
                        overflow: hidden;
                    }
                    .wrapper{
                        background-color: #fff;
                        width: 500px;
                        height: auto;
                        margin: 0px auto;
                        margin: 30px auto;
                    }
                 
                    .header{
                        background-color: rgb(200, 200, 245);
                        padding: 20px 0;
                        text-align: center;
                    }
            
                    .content{
                        padding: 20px 15px;
                        text-align: center;
                    }
            
                    .content h3{
                        padding: 10px 0;
                    }
                    .content p{
                        font-size: 16px;
                        margin-bottom: 20px;
                        font-family: sans-serif;
                    }

                    .info{
                        background-color: rgb(200, 200, 245);
                        padding: 20px 0;
                        text-align: center;
                    }
            
                    .info span{
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .info p{
                        padding-top: 15px;
                    }
                </style>
            
            </head>
            <body>
                <div class="main_wrapper">
                    <div class="wrapper">
                        <div class="header">
                            <h3>Hi, I'm ${name}</h3>
                        </div>
                        <div class="content">
                            <p>${text}</p>
                        </div>
                        <div class="info">
                            <span>Accout-Info</span>
                            <p>My Email Is : ${email}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
