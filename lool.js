let RemoveMines=false
if (e.keyCode == 119 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        RemoveMines = true
    }
})
RemoveMines.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let mines = GameObjects.getMines();

    if (!mines)
    {
        return;
    }

    var n;
    for (n = mines.minesByUser_0.keys.iterator(); n.hasNext();) 
    {
        var o = n.next();
        mines.removeAllMines_0(o)
    }

}
