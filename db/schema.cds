namespace testcreatens;

entity Products
{
    key ID : UUID;
    name : String(100);
    price : Decimal(6,2);
}
