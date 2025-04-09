# Use the Nginx base image
FROM nginx:alpine

# Copy index.html to the Nginx default directory
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
