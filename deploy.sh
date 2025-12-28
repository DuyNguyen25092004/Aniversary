 flutter build web --base-href "/anniversary_app/"
  cd build/web
  git add .
  git commit -m "deploy"
  git branch -M gh-pages
  git push -f origin gh-pages
