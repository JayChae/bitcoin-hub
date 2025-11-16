import { NextRequest, NextResponse } from "next/server";

type ConsultingRequestData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const data: ConsultingRequestData = await request.json();

    // 필수 필드 검증
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "필수 정보가 누락되었습니다." },
        { status: 400 }
      );
    }

    // TODO: 여기에 알람 전송 로직 추가
    // 옵션 1: 이메일 전송 (예: Resend, SendGrid, Nodemailer 등)
    // 옵션 2: Slack 알림
    // 옵션 3: Discord 웹훅
    // 옵션 4: 데이터베이스에 저장 후 관리자 대시보드에서 확인

    // 임시로 콘솔에 로그 출력
    console.log("=== 새로운 1:1 컨설팅 상담 신청 ===");
    console.log("이름:", data.name);
    console.log("연락처:", data.phone);
    console.log("이메일:", data.email);
    console.log("상담 내용:", data.message || "(없음)");
    console.log("신청 시간:", new Date().toISOString());
    console.log("================================");

    // 예시: 이메일 전송 코드 (실제 구현 시 주석 해제)
    /*
    await sendEmail({
      to: "your-email@example.com", // 알람을 받을 이메일 주소
      subject: `[비트문] 새로운 1:1 컨설팅 상담 신청 - ${data.name}`,
      html: `
        <h2>새로운 1:1 컨설팅 상담 신청이 접수되었습니다.</h2>
        <p><strong>이름:</strong> ${data.name}</p>
        <p><strong>연락처:</strong> ${data.phone}</p>
        <p><strong>이메일:</strong> ${data.email}</p>
        <p><strong>상담 내용:</strong></p>
        <p>${data.message || "(없음)"}</p>
        <p><strong>신청 시간:</strong> ${new Date().toLocaleString("ko-KR")}</p>
      `,
    });
    */

    // 예시: Slack 웹훅 전송 코드 (실제 구현 시 주석 해제)
    /*
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🔔 새로운 1:1 컨설팅 상담 신청`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*새로운 1:1 컨설팅 상담 신청이 접수되었습니다.*\n\n*이름:* ${data.name}\n*연락처:* ${data.phone}\n*이메일:* ${data.email}\n*상담 내용:* ${data.message || "(없음)"}`,
            },
          },
        ],
      }),
    });
    */

    return NextResponse.json(
      { message: "상담 신청이 성공적으로 접수되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("상담 신청 처리 중 오류:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
