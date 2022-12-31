const nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

const sendVerificationEmail = async (email, subject, link) => {
	try {
		const ses = new aws.SES({
			apiVersion: "2022-12-11",
			region: "us-east-1",
			defaultProvider,
		});

		let transporter = nodemailer.createTransport({
			SES: { ses, aws },
		});

		transporter.sendMail({
			from: "noreply@app.famallies.org",
			to: email,
			subject: subject,
			text: `Hi,
			
			You recently created an account for the MyFullBreath mobile app.
			Please use the link below to verify your email address:
			
			${link}`,
			html: 'Embedded image: <img src="cid:AppIcon',
			attachments: [{
				filename: 'App_Icon.png',
				path: '../../client/src/images/App_Icon.png',
				cid: 'AppIcon'
			}]
		});

		console.log("email sent sucessfully");
	} catch (error) {
		console.log(error, "email not sent");
	}
};

module.exports = sendVerificationEmail;