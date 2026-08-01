# 독립형 연구실 홈페이지 템플릿

원본 홈페이지의 정적 화면, 레이아웃, 게시판 편집기와 Firebase 연동 방식을 보존한 GitHub Pages용 템플릿입니다. 운영 Firebase 데이터·사용자·관리자 계정·도메인은 포함하지 않습니다.

## 프로젝트 구조

이 프로젝트는 빌드 단계가 없는 정적 HTML 사이트입니다. `index.html`을 시작점으로 하며 GitHub Pages는 저장소 루트를 그대로 배포합니다.

- `firebase-config.js`: 새 Firebase Web App의 설정을 넣는 유일한 위치
- `board.html`, `viewer.html`, `editor.html`: 게시판 목록·조회·작성
- `about.html`, `publication.html`: Firestore에서 편집 가능한 정적 성격의 페이지
- `firestore.rules`, `storage.rules`, `firestore.indexes.json`: Firebase 배포 파일
- `CNAME.example`, `cors.example.json`: 새 도메인/Storage CORS 설정 예시
- `sample-data/`: 운영 데이터가 아닌 형식 확인용 데이터

## 빠른 시작

1. 이 저장소를 clone하거나 **Use this template**로 복제합니다.
2. GitHub에서 새 저장소를 만들고 원격을 새 저장소로 변경한 뒤 push합니다.
3. [FIREBASE_SETUP.md](FIREBASE_SETUP.md)를 따라 Firebase 프로젝트와 Web App을 만듭니다.
4. `firebase-config.js`의 `YOUR_...` 값을 새 Firebase 설정으로 바꿉니다.
5. [ADMIN_SETUP.md](ADMIN_SETUP.md)를 따라 첫 관리자 UID를 등록합니다.
6. [CUSTOM_DOMAIN_SETUP.md](CUSTOM_DOMAIN_SETUP.md)를 따라 GitHub Pages와 도메인을 연결합니다.

## 새 GitHub 저장소로 옮기기

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_NEW_REPOSITORY.git
git push -u origin main
```

GitHub 저장소에서 **Settings → Pages → Deploy from a branch → main / (root)**를 선택합니다. GitHub Pages의 기본 주소는 `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/`입니다. 저장소 이름을 `YOUR_GITHUB_USERNAME.github.io`로 만들면 사용자 사이트 주소가 됩니다.

## Firebase 데이터 구조

| 경로 | 용도 | 주요 필드 |
| --- | --- | --- |
| `admins/{uid}` | 관리자 허용 목록 | `email`, `createdAt` (선택) |
| `users/{uid}/posts/{postId}` | 관리자가 소유하는 원본 글 | `id`, `uid`, `title`, `group`, `category`, `item`, `content` 또는 `contentUrl`, `plain`, `publish`, `createdAt`, `updatedAt` |
| `public_posts/{postId}` | 공개 목록/조회에 쓰는 게시글 | 위 글 필드 + `authorUid`, `publish` |

`group`과 `category`/`item`은 메뉴 위치를 결정합니다. 대용량 본문은 Firebase Storage에 저장되고 `contentUrl`로 참조될 수 있습니다. `sample-data/public_posts.json`은 형식 참고용이며 자동으로 import되지는 않습니다.

## 주의 사항

- `firebase-config.js`의 Firebase Web 설정은 브라우저에 공개되는 식별자입니다. 보안은 반드시 Rules로 제어하세요.
- 현재 Rules는 `admins/{uid}`에 등록된 사용자만 글/파일을 쓸 수 있게 합니다. Firebase Console에서 만든 첫 관리자 문서는 Rules를 우회할 수 있습니다.
- 원본 운영 프로젝트, 사용자 UID, 이메일, 데이터 및 도메인은 이 저장소에 포함하지 않았습니다.
- `CNAME`은 의도적으로 포함하지 않았습니다. 새 도메인을 정한 뒤에만 만드세요.
