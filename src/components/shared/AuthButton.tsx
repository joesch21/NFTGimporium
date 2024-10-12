import { Button } from "@chakra-ui/react";
import { useAuth } from "@thirdweb-dev/react";  // Assuming you're using Thirdweb's auth

export default function AuthButton() {
  const { login, logout, isLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      await login({ provider: "google" });  // You can switch the provider to "facebook", "apple", etc.
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Button onClick={isLoggedIn ? logout : handleLogin}>
      {isLoggedIn ? "Logout" : "Login with Google"}
    </Button>
  );
}
