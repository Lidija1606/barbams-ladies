
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <meta name="format-detection" content="telephone=no" />
    <link href="{{asset('fonts/gotham-narrow-cufonfonts-webfont/style.css')}}"
          rel="stylesheet" type="text/css">
    <style>
        /* Reset styles */
        @font-face {
            font-family: 'Gotham Bold';
            src: url('https://www.barbams.com/public/fonts/gotham-narrow-cufonfonts-webfont/Gotham-Bold.woff');
        }
        @font-face {
            font-family: 'GothamLight';
            src: url('https://www.barbams.com/public/fonts/gotham-narrow-cufonfonts-webfont/GothamLight.woff');
        }
        .hx{
            background-color: #fff!important;
        }
        body {
            margin: 0;
            padding: 0;
            min-width: 100%;
            width: 100% !important;
            height: 100% !important;
            background-color: #fff!important;
        }

        body,
        table,
        td,
        div,
        p,
        a {
            -webkit-font-smoothing: antialiased;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            line-height: 100%;
        }
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse !important;
            border-spacing: 0;
        }

        img {
            border: 0;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        /* Rounded corners for advanced mail clients only */

        @media all and (min-width: 560px) {
            .container {
                border-radius: 8px;
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                -khtml-border-radius: 8px;
            }
        }
        /* Set color for auto links (addresses, dates, etc.) */

        .footer a,
        .footer a:hover {
            color: #828999;
        }
        .see-more {
            height: 26px;
            display: inline-block;
            line-height: 1.5em;
            font-family: Gotham Bold;
            text-transform: uppercase;
            border-radius: 7px;
            background: #000000!important;
        }
    </style>
    <title>{{__('mail.barbams')}}</title>

</head>
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
	background-color: #FFF;
	color: #FFFFFF;" bgcolor="#FFF" text="#000">
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; margin-bottom: 30px" class="background">
    <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" >
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="500" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 500px;" class="wrapper">

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 20px;
			padding-bottom: 20px;">
                        <a target="_blank" style="text-decoration: none;" href="https://www.barbams.com?utm_campaign=40_days_reminder&utm_medium=email&utm_source=newsletter"><img border="0" vspace="0" hspace="0" src="https://barbams.com/img/email-white.png" width="100%" height="" alt="" title="" style="
				color: #FFFFFF;
				font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" /></a>

                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;  padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px;
			padding-top: 5px;
			color: #000000; font-family: 'Gotham Bold';
			" class="header">
                        {{__('mail.reminder.superHeader')}}
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
            font-family: 'Gotham Book';  line-height: 130%; color: #000; padding-top: 15px;
			" class="paragraph">
                        {{__('mail.reminder.content')}}
                    </td>
                </tr>
                <tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">
                        <div class="see-more-home">
                            <a class="gotham-bold see-more" style="color: #FFF;
    padding: 0 20px;
    text-decoration: blink;" href="https://barbams.com/en/order/beard-growth-elixir?utm_campaign=40_days_reminder&utm_medium=email&utm_source=newsletter">{{__('mail.reminder.order')}}</a>

                        </div>
                    </td></tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #000000;
            font-family: 'Gotham Book';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.reminder.content1')}}
                        <span style="font-family: 'Gotham Bold'; font-weight: bold; "> {{__('mail.reminder.content11')}} </span>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #000000;
            font-family: 'Gotham Book';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.reminder.content12')}}<br/>
                        <span style="font-family: 'Gotham Bold'; font-weight: bold;">{{__('mail.reminder.content2')}}</span>
                    </td>

                </tr>

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #000;
            font-family: 'Gotham Book';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.reminder.content3')}}
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #000000;
            font-family: 'Gotham Book';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.reminder.content4')}}
                        <span style="font-family: 'Gotham Bold'; font-weight: bold">{{__('mail.reminder.content41')}}</span>
                    </td>
                </tr>
                <tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">
                        <div class="see-more-home">
                            <a class="gotham-bold see-more" style="color: #FFF;
    padding: 0 20px;
    text-decoration: blink;" href="https://barbams.com/en/about/results?utm_campaign=40_days_reminder&utm_medium=email&utm_source=newsletter">{{__('mail.reminder.results')}}</a>

                        </div>
                    </td></tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
			padding-top: 10px;
			padding-bottom: 20px;
			color: #828999;
            font-family: 'Gotham Bold';
			" class="footer">

                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;" >
                        <img src="https://barbams.com/img/logo.png" width="40%" alt="Barbams Logo">

                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;" >


                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>

</html>