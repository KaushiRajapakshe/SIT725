// Kaushalya_Rajapaksha - s223681886
// 6.1C - SIT753
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo "Compile the code and generate any necessary artifacts using Maven"
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
                always {
                    emailext (
                        attachLog: true, 
                        to: 'kaushi.rajapakshe1@gmail.com', 
                        subject: "Unit and Integration Tests Status Email - ${currentBuild.result}", 
                        body: "Unit and Intergration Tests was successful!",
                        mimeType: 'text/html'
                    )
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
                    emailext attachLog: true, to: 'kaushi.rajapakshe1@gmail.com', subject: "SUCCESS! - Security Scan Status Email", body: "Security Scan was successful!"
                }
                failure {
                    emailext attachLog: true, to: 'kaushi.rajapakshe1@gmail.com', subject: "FAILED! - Security Scan Status Email", body: "Security Scan failed. Please check the logs for details."
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
                    emailext attachLog: true, to: 'kaushi.rajapakshe1@gmail.com', subject: "SUCCESS! - Integration Tests Status Email on Staging", body: "Intergration Test on Staging was successful!"
                }
                failure {
                    emailext attachLog: true, to: 'kaushi.rajapakshe1@gmail.com', subject: "FAILED! - Integration Tests Status Email", body: "Intergration Tests on Staging failed. Please check the logs for details."
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