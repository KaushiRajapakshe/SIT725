// Kaushalya_Rajapaksha - s223681886
// 6.1C - SIT753
pipeline {
    agent any
    environment {
        DIRECTORY_PATH = "/Users/kaushirajapakshe/Documents/Deakin/MSC/Year 1/T1/SIT753/OnTrack/5.1P"
        TESTING_ENVIRONMENT = "testing_environment"
        PRODUCTION_ENVIRONMENT = "Kaushalya_Rajapaksha"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    MAVEN_VERSION = "sh(script: 'mvn --version | grep 'Apache Maven'', returnStdout: true).trim()"
                    echo "Compile the code and generate any necessary artifacts using Maven"
                    echo "Maven Version (Unix): ${MAVEN_VERSION}"
                }
            }
            post {
                success {
                    mail to: "kaushi.rajapakshe1@gmail.com",
                    subject: "Build Status Email",
                    body: "Build was successful!"
                }
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo "Running unit tests and integration tests"
                }
            }
        }

        stage('Code Analysis') {
            steps {
                script {
                    echo "Analyzing code using a code analysis tool using SonarQube"
                }
            }
        }

        stage('Security Scan') {
            steps {
                script {
                    echo "Performing security scan using a security scanning toolusing OWASP"
                }
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo "Deploying the application to a staging server using AWS EC2 instance"
                }
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo "Running integration tests on the staging environment"
                }
            }
        }
        
        stage('Deploy to Production') {
            steps {
                echo "Deploying the application to a production server AWS EC2 instance"
            }
        }
    }
}
