import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const jobTitle = formData.get("jobTitle") as string;
        const cvFile = formData.get("cv") as File;

        // Validate required fields
        if (!firstName || !lastName || !email || !jobTitle || !cvFile) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate file size (10MB max)
        const MAX_SIZE = 10 * 1024 * 1024;
        if (cvFile.size > MAX_SIZE) {
            return NextResponse.json(
                { error: "File size must be less than 10MB" },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const bytes = await cvFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Check for SMTP configuration
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("SMTP Configuration Error: SMTP_USER or SMTP_PASS is missing in .env.local");
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        // Create email transporter
        // Note: Configure these environment variables in your .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: "hello@roastedbyte.com",
            subject: `New Job Application: ${jobTitle}`,
            html: `
                <h2>New Job Application</h2>
                <p><strong>Position:</strong> ${jobTitle}</p>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <br>
                <p>Please find the applicant's CV attached.</p>
            `,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer,
                    contentType: cvFile.type,
                },
            ],
        });

        return NextResponse.json(
            { message: "Application submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json(
            { error: "Failed to submit application" },
            { status: 500 }
        );
    }
}


