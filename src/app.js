export const levelHealth = (name, health) => {
    if (health > 50) {
        return "healthy";
    } else {
        if (health < 15) {
            return "critical";
        } 
    }

    return "wounded";
}