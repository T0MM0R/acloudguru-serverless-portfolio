import StringIO
import boto3
import zipfile
import mimetypes


def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:502003314174:deployPortfolioTopic')

    location = {
        "bucketName": "serverlessbuild.thomaswilson.me"
        "objectKey": "serverlessbuild.zip"
    }

    try:
        job = event.get('codePipeline.job')

        if job:
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == "MyAppBuild":
                    location = artifact['location']['s3Location']



        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('serverless.thomaswilson.me')
        build_bucket = s3.Bucket(location['bucketName'])

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location['objectKey'], portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        topic.publish(Subject="portfolio deployed", Message="The portfolio was deployed to serverless.thomaswilsonme")

    except:
        topic.publish(Subject="portfolio not deployed", Message="The portfolio was not deployed to serverless.thomaswilsonme")
        raise
