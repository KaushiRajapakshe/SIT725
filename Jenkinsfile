// Kaushalya_Rajapaksha - s223681886
// 6.1C - SIT753
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    MAVEN_VERSION = sh(script: 'mvn --version | grep "Apache Maven"', returnStdout: true).trim()
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
            post {
                success {
                    mail to: "kaushi.rajapakshe1@gmail.com",
                    subject: "Test Status Email",
                    body: "Unit and Intergration Test was successful!"
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
                    echo "Performing security scan using a security scanning tool using OWASP"
                }
            }
            post {
                success {
                    mail to: "kaushi.rajapakshe1@gmail.com",
                    subject: "Security Scan Status Email",
                    body: "Security Scan was successful!"
                }
            }
        }
        stage('Deploy Tests on Staging') {
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
            post {
                success {
                    mail to: "kaushi.rajapakshe1@gmail.com",
                    subject: "Test Status Email on Staging",
                    body: "Unit and Intergration Test on Staging was successful!"
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