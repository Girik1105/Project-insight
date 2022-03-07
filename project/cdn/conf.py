import environ
env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

# reading .env file
environ.Env.read_env()

AWS_ACCESS_KEY_ID=env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY=env("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME=env("AWS_STORAGE_BUCKET_NAME")
AWS_S3_ENDPOINT_URL="https://sgp1.digitaloceanspaces.com"

AWS_S3_OBJECT_PARAMETERS = {
    "CacheControl": "max-age=86400",
     "ACL": "public-read"
}
AWS_LOCATION = f"https://{AWS_STORAGE_BUCKET_NAME}.sgp1.digitaloceanspaces.com"

DEFAULT_FILE_STORAGE = "project.cdn.backends.MediaRootS3BotoStorage"
STATICFILES_STORAGE = 'project.cdn.backends.StaticRootS3BotoStorage'