FROM nginx:1.27-alpine
RUN apk upgrade --no-cache
COPY public/ /usr/share/nginx/html/
USER nginx
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
