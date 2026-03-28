# Render Static Site Guide

이 패키지는 **hidden-pc-v1.zip 기준 화면/이미지/내용을 유지**하면서,
문의 폼만 기존 백엔드 API로 연결한 버전입니다.

## Render 설정
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

## 기존 DB / 이메일 서버 연결
상담 폼은 아래 기존 API로 전송됩니다.

`https://hiddenpc.onrender.com/api/contact`

즉 기존 PostgreSQL 저장과 이메일 발송은 기존 서버가 그대로 처리합니다.
