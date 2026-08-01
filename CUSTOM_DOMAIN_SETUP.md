# GitHub Pages와 Custom Domain 설정

## GitHub Pages

1. 새 GitHub 저장소에 파일을 push합니다.
2. **Settings → Pages**에서 source를 **Deploy from a branch**, branch를 `main`, folder를 `/(root)`로 설정합니다.
3. 표시되는 Pages URL에서 홈페이지가 열리는지 확인합니다.

## WHOIS에서 구매한 도메인 연결

1. GitHub 저장소의 **Settings → Pages → Custom domain**에 사용할 도메인(예: `www.your-domain.example`)을 입력하고 저장합니다.
2. WHOIS DNS 관리에서 GitHub Pages 안내에 따라 레코드를 추가합니다.
   - 서브도메인(`www`)은 보통 `CNAME`을 `YOUR_GITHUB_USERNAME.github.io`로 지정합니다.
   - 루트 도메인은 GitHub Docs가 안내하는 A/AAAA 레코드를 사용합니다.
3. DNS 전파 후 Pages 화면에서 **Enforce HTTPS**를 켭니다.

## 저장소의 CNAME 파일

Custom domain을 설정한 뒤 필요하면 `CNAME.example`을 `CNAME`으로 복사하고 한 줄을 실제 도메인으로 바꿔 커밋합니다.

```text
www.your-domain.example
```

이 템플릿에는 이전 운영 도메인이 남지 않도록 실제 `CNAME` 파일을 포함하지 않았습니다. GitHub Pages의 상세 DNS 값은 [GitHub Pages custom domain 문서](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)를 기준으로 확인하세요.
