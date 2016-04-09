import transform from 'object-2darray'

const images = {
	"Kinesis": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974991/aws/Kinesis.png",
	"Inspector": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974991/aws/Inspector.png",
	"Import-Export SnowBall": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974991/aws/Import-ExportSnowball.png",
	"Identity And Access Management": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974991/aws/IdentityAndAccessManagement.png",
	"Glacier": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/Glacier.png",
	"Gamelift": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974991/aws/Gamelift.png",
	"Elastic Transcoder": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/ElasticTranscoder.png",
	"EMR": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/EMR.png",
	"Elastic Search Service": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/ElasticSearchService.png",
	"Elastic File System": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/ElasticFileSystem.png",
	"Elastic Bean Stalk": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/ElasticBeanstalk.png",
	"Elastic Cache": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/ElastiCache.png",
	"EC2 Container Service": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/EC2ContainerService.png",
	"EC2": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/EC2.png",
	"DynamoDB": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/DynamoDB.png",
	"DMS": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/DMS.png",
	"Directory Service": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/DirectoryService.png",
	"Direct Connect": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974990/aws/DirectConnect.png",
	"Device Farm": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/DeviceFarm.png",
	"Data Pipeline": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/DataPipeline.png",
	"Config": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/Config.jpg",
	"Cognito": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/Cognito.png",
	"Code Pipeline": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/CodePipeline.png",
	"Code Deploy": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/CodeDeploy.svg",
	"Code Commit": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/CodeCommit.png",
	"Cloud Watch": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/CloudWatch.png",
	"Cloud Trail": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/CloudTrail.png",
	"Cloud Search": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974989/aws/CloudSearch.png",
	"Cloud Front": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/CloudFront.png",
	"Cloud Formation": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/CloudFormation.svg",
	"Certificate Manager": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/CertificateManager.png",
	"AWS Mobile Hub": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/awsMobileHub.png",
	"AWS IoT": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/AWSIOT.png",
	"App Stream": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/AppStream.png",
	"Api Gateway": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/ApiGateway.png",
	"WAF": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/Waf.svg",
	"VPC": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/VPC.png",
	"Trusted Advisor": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/TrustedAdvisor.jpg",
	"SWF": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974988/aws/SWF.png",
	"Storage Gateway": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/StorageGateway.png",
	"SNS": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/SNS.png",
	"SQS": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/SQS.png",
	"SES": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/SES.png",
	"Service Catalog": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/ServiceCatalog.png",
	"S3": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/S3.png",
	"Route53": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/Route53.png",
	"Redshift": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/redshift.png",
	"RDS": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/RDS.png",
	"Ops Works": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/OpsWorks.png",
	"Mobile Analytics": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/MobileAnalytics.png",
	"Machine Learning": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/MachineLearning.png",
	"Lambda": "http://res.cloudinary.com/masteryoperation/image/upload/v1459974987/aws/Lambda.png"
};

const twoDimensionalArray = transform(images);

function generateTiles() {
  // 6 is the number of tiles within the page
  // tiles become a 2darray of length (6)
  const tiles = Array(6);
  for ( let i = 0; i < tiles.length; i++ ) {
		let uniqueTile = twoDimensionalArray[ Math.floor( Math.random() * twoDimensionalArray.length )];
		// while uniqueVal is already in array don't include it
		while(tiles.indexOf(uniqueTile) > -1) {
			uniqueTile = twoDimensionalArray[ Math.floor( Math.random() * twoDimensionalArray.length )];
		}
		tiles[i] = uniqueTile;
	}
	return tiles;
}

function pickLogoToGuess(tiles) {
	return tiles[ Math.floor(Math.random() * tiles.length)];
}


const twoDi = generateTiles();

const logoToGuess = pickLogoToGuess(twoDi);


export { twoDi, logoToGuess, images }
