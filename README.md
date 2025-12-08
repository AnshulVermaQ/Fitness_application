
**Microservices included:**
- **Backend Services**: REST APIs secured with Keycloak (OAuth2 JWT)
- **Service Discovery**: Eureka Server
- **Message Broker**: RabbitMQ for asynchronous messaging
- **Frontend**: React SPA consuming APIs

---

## **Technologies Used**

**Backend:**
- Java 21
- Spring Boot 3+
- Spring WebFlux / Spring MVC
- Spring Security (OAuth2 JWT)
- Spring Cloud Eureka (Service Discovery)
- RabbitMQ (Messaging)
- Maven or Gradle

**Frontend:**
- React 18+
- Axios
- React Router
- Tailwind CSS (optional)

**Infrastructure / Tools:**
- Keycloak (Identity & Access Management)
- Eureka Server (Service Discovery)
- RabbitMQ (Message Broker)
- Docker (optional, for Keycloak and RabbitMQ)

---

## **Setup Instructions**

### **1. Infrastructure**

**Option 1: Docker (Recommended)**

```bash
# Run Keycloak
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.1 start-dev

# Run RabbitMQ
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
