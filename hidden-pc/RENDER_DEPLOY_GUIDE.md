# Render 배포 가이드

## 환경변수
- DATABASE_URL
- SENDGRID_API_KEY
- MAIL_FROM
- MAIL_TO

## DB
Render PostgreSQL 또는 기존 PostgreSQL에 `schema.sql` 실행

## 동작
- 상담 폼 제출 -> DB 저장
- 상담 폼 제출 -> 이메일 발송
