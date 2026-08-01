# Firebase 설정

이 사이트는 Firebase JavaScript SDK Compat 9.23.0을 CDN으로 사용하며 **Authentication, Firestore, Storage**를 사용합니다. Analytics는 코드에서 초기화하지 않지만 `measurementId`는 설정 파일에 보관해 둘 수 있습니다.

## 1. Firebase 프로젝트와 Web App 만들기

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트를 만듭니다.
2. 프로젝트 개요에서 Web App(`</>`)을 등록합니다.
3. 표시되는 `firebaseConfig`에서 아래 7개 값을 복사합니다.
4. 저장소 루트의 `firebase-config.js`에만 입력합니다.

```js
window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## 2. 필요한 Firebase 서비스 켜기

- **Authentication**: Sign-in method에서 Email/Password를 활성화합니다.
- **Firestore Database**: Native mode로 생성합니다.
- **Storage**: 기본 버킷을 생성합니다.

## 3. Rules와 Indexes 배포

Firebase CLI를 설치·로그인한 뒤 저장소 루트에서 실행합니다.

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore,storage
```

`firebase.json`은 `firestore.rules`, `firestore.indexes.json`, `storage.rules`를 참조합니다. 인덱스 배포 완료 전에는 일부 복합 조건 게시글 조회가 실패할 수 있습니다.

## 4. Storage CORS (필요한 경우)

에디터에서 외부 이미지를 가져오거나 Storage 접근이 브라우저에서 차단될 때만 `cors.example.json`을 새 도메인으로 수정해 적용합니다.

```bash
gsutil cors set cors.example.json gs://YOUR_PROJECT_ID.firebasestorage.app
```

버킷 이름은 Firebase Console에 표시된 실제 Storage bucket으로 확인하세요.
