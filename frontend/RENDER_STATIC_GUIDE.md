# Hidden PC v1 Static Site 배포 가이드

이 프로젝트는 `hidden-pc-v1.zip`을 기준으로 **frontend 폴더 내부에서 정적 사이트로 빌드**되도록 재구성했습니다.

## Render Static Site 설정
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

## 환경변수
- `VITE_CONTACT_API_URL=https://hiddenpc.onrender.com/api/contact`

## 유지되는 기능
- 기존 랜딩페이지/홈페이지 구성 유지
- 상담 신청 → 기존 백엔드 API 전송
- 기존 DB 저장 유지
- 기존 이메일 발송 유지
