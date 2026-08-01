# 관리자 설정

이 템플릿은 기존 관리자 계정이나 UID를 복사하지 않습니다. Firestore Rules는 `admins/{uid}` 문서가 있는 로그인 사용자만 글·페이지·Storage 파일을 수정하도록 제한합니다.

## 첫 관리자 등록

1. Firebase Console → **Authentication → Users**에서 Email/Password 사용자 계정을 만듭니다. 또는 배포된 사이트에서 회원가입합니다.
2. 해당 사용자의 **UID**를 복사합니다.
3. Firebase Console → **Firestore Database**에서 컬렉션 `admins`를 만듭니다.
4. 문서 ID를 복사한 UID로 지정하고, 선택적으로 아래 필드를 추가합니다.

```text
email: "admin@example.com"
createdAt: "2026-01-01T00:00:00.000Z"
```

5. 로그아웃 후 다시 로그인합니다. 이제 게시글 작성, About/Publication 수정, 파일 업로드가 가능합니다.

Firebase Console에서의 최초 문서 생성은 관리자 권한으로 Rules를 우회하므로 가능합니다. 이후 관리자 추가/제거도 Console에서 `admins/{uid}` 문서를 추가/삭제하여 처리합니다.

## 권한 모델

- 누구나 공개(`publish: true`) 게시글을 읽을 수 있습니다.
- `admins/{uid}`에 등록된 로그인 사용자만 본인 UID로 소유되는 게시글과 Storage 파일을 쓸 수 있습니다.
- 다른 UID의 게시글 수정·삭제는 허용되지 않습니다.
- Authentication의 일반 사용자는 관리자가 되기 전까지 쓰기 권한이 없습니다.
