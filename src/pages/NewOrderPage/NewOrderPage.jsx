export default function NewOrderPage() {
    return ( 
        <main className="NewOrderPage">
            <aside>
                <Logo />
                <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
                />
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
            />
            <OrderDetail />
        </main>
    )
}