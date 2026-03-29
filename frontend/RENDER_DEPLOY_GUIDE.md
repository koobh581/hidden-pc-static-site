# Render 배포 가이드

이 버전은 `hidden-pc-website.zip`의 화면/이미지/내용을 유지하면서,
상담 폼만 기존 백엔드 API로 연결한 static 배포용 구조입니다.

## Render Static Site 설정
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

## 환경변수
- `VITE_CONTACT_API_URL=https://hiddenpc.onrender.com/api/contact`

## 동작
- 상담 폼 제출 → 기존 백엔드 API 호출
- 기존 DB 저장 / 이메일 송부 기능 그대로 사용
