import StringIO
import boto3
import zipfile
import mimetypes


def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:502003314174:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('serverless.thomaswilson.me')
        build_bucket = s3.Bucket('serverlessbuild.thomaswilson.me')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('serverlessbuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        topic.publish(Subject="portfolio deployed", Message="The portfolio was deployed to serverless.thomaswilsonme")

    except:
        topic.publish(Subject="portfolio not deployed", Message="The portfolio was not deployed to serverless.thomaswilsonme")
        raise
