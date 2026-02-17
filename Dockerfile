# Multi-stage build for optimized Docker image
FROM nginx:alpine

# Metadata
LABEL maintainer="Jacob Weizman <info@jacob-weizman.com>"
LABEL description="Digital Detox Website - Smartphone aus, Leben an"

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY styles/ /usr/share/nginx/html/styles/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY images/ /usr/share/nginx/html/images/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 6343
EXPOSE 6343

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD ["wget", "-q", "-O", "/dev/null", "http://127.0.0.1:6343/"]

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
