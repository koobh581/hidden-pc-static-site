# Render Static Site 배포 가이드

이 폴더는 **빌드 없는 순수 static 사이트**입니다.

## Render 설정
- **Service Type**: Static Site
- **Root Directory**: `frontend`
- **Build Command**: 비워둠
- **Publish Directory**: `.`

## 기존 DB / 이메일 서버 연결
이 사이트의 상담 폼은 아래 기존 백엔드 API로 전송됩니다.

`https://hiddenpc.onrender.com/api/contact`

즉:
- DB 저장: 기존 PostgreSQL 서버 처리
- 이메일 발송: 기존 메일 서버 처리

## 폼 전송 필드
- name
- phone
- email
- region
- inquiry_type
- message
- agreed
