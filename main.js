var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    villager: 0,
    villagerPerUpgrade: 1,
    villagerPerUpgradeCost: 50,
    woodcutter: 0,
    woodcutterPerUpgrade: 1,
    woodcutterPerUpgradeCost: 100
  }
  
  function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }

  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }

  function recruitVillager() {
    gameData.villager += gameData.villagerPerUpgrade
    document.getElementById("villagerRecruited").innerHTML = gameData.villager + " Villagers Recruited"
  }

  function buyVillagerPerUpgrade() {
    if (gameData.gold >= gameData.villagerPerUpgradeCost) {
      gameData.gold -= gameData.villagerPerUpgradeCost
      gameData.villager += 1
      gameData.villagerPerUpgradeCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("villagerRecruited").innerHTML = gameData.villager + " Villagers Recruited"
      document.getElementById("perClickVillagerUpgrade").innerHTML = "Recruit Villager (Currently " + gameData.villagerPerUpgrade + ") Cost: " + gameData.villagerPerUpgradeCost + " Gold"
    }
  }

  function hireWoodcutter() {
    gameData.woodcutter += gameData.woodcutterPerUpgrade
    document.getElementById("woodcutterHired").innerHTML = gameData.woodcutter + " Woodcutters Hired"
  }

  function buyWoodcutterPerUpgrade() {
    if (gameData.gold >= gameData.woodcutterPerUpgradeCost && gameData.villager >= gameData.woodcutterPerUpgrade) {
      gameData.gold -= gameData.woodcutterPerUpgradeCost
      gameData.woodcutter += 1
      gameData.villager -= 1
      gameData.woodcutterPerUpgradeCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("villagerRecruited").innerHTML = gameData.villager + " Villagers Recruited"
      document.getElementById("woodcutterHired").innerHTML = gameData.woodcutter + " Woodcutters Hired"
      document.getElementById("perClickWoodcutterUpgrade").innerHTML = "Hire Woodcutter (Currently " + gameData.woodcutterPerUpgrade + ") Cost: " + gameData.woodcutterPerUpgradeCost + " Gold"
    }
  }