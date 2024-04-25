import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return NextResponse.json({ success: false });
  
  const { recaptchaToken } = await request.json();

  const formData = `secret=${secretKey}&response=${recaptchaToken}`;

  let res;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );
  } catch (error) {
    return NextResponse.json({ success: false });
  }

  if (res && res.data?.success && res.data.score > 0.5) {
    return NextResponse.json({
      success: true,
      score: res.data.score,
    });
  } else {
    return NextResponse.json({ success: false });
  }
}