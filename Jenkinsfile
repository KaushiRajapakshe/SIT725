// Kaushalya_Rajapaksha - s223681886
// 6.1C - SIT753
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo "Compile the code and generate any necessary artifacts"
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
        
        stage('Test') {
            steps {
                echo "Running unit tests."
                echo "Running integration tests."
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Deploy the application to a testing environment specified by the environment variable."
            }
        }
    }
}
