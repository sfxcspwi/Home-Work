export function applyDiscount(total) 
{
    if (total >= 500) 
    {
        return total * 0.9;
    }

    return total;
}