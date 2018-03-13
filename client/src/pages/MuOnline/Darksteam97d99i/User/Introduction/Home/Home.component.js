import './Home.css';
import React from 'react';

export default () => (
  <div className="ds9799-intro-home">
    <div className="intro-image">
      <div className="content-menu">
        <div className="header">Contents</div>
        <a href="#sc1">I. Development History</a>
        <a href="#sc2">II. Client Updates</a>
        <a href="#sc3">III. Custom Commands</a>
        <a href="#sc4">IV. Custom Events</a>
        <a href="#sc5">V. Other Customs</a>
        <a href="#sc6">VI. Security</a>
        <a href="#sc7">VII. Supported OS</a>
        <a href="#sc8">VIII. Supported SQL Servers</a>
        <a href="#sc9">IX. Mirror Downloads</a>
        <a href="#sc10">X. Credits</a>
      </div>
      <img src="/images/muonline/darksteam97d99i.png" alt="ds9799" />
    </div>
    <div className="intro-data">
      <h3 id="sc1">I. Development History:</h3>
      <h4>[Beta 37.4 Changelog]</h4>
      <ul>
        <li>Tweaked /vault command &amp; fixed dupe bug</li>
      </ul>
      <h4>[Beta 37.3 Changelog]</h4>
      <ul>
        <li>Fixed Sky event not randomizing items</li>
        <li>Changing points per level will now also change in Blood Castle</li>
      </ul>
      <h4>[Beta 37.2 Changelog]</h4>
      <ul>
        <li>Stability improvements</li>
      </ul>
      <h4>[Beta 37.1 Changelog]</h4>
      <ul>
        <li>Fixed /move command not working properly</li>
      </ul>
      <h4>[Beta 37 Changelog]</h4>
      <ul>
        <li>Fixed /reset and /grandreset not switching characters if selfdefense is active</li>
        <li>Fixed /post command crashing on some systems</li>
        <li>Performance improvements</li>
      </ul>
      <h4>[Beta 36.1 Changelog]</h4>
      <ul>
        <li>Fixed drop system min/max level</li>
        <li>Fixed high cpu usage</li>
      </ul>
      <h4>[Beta 36 Changelog]</h4>
      <ul>
        <li>Attempt to fix multi vault dupe</li>
        <li>Fixed Sky event not being able to enter in some cases</li>
        <li>Quest system tweaks</li>
      </ul>
      <h4>[Beta 35 Changelog]</h4>
      <ul>
        <li>Fixed /pet command only for gm check</li>
        <li>Added ability to change npc buffers text</li>
        <li>Skills min level check now uses item(kor).txt</li>
        <li>Fixed starting level up points and zen options</li>
      </ul>
      <h4>[Beta 34.7 Changelog]</h4>
      <ul>
        <li>Fixed /pkclear checks</li>
        <li>Attempt to fix guild joining issue</li>
        <li>Fixed golden archer dupe</li>
      </ul>
      <h4>[Beta 34.6 Changelog]</h4>
      <ul>
        <li>Added ability to limit maximum players in a guild</li>
        <li>Added ability to set /pkclear's command price * pk count</li>
      </ul>
      <h4>[Beta 34.5 Changelog]</h4>
      <ul>
        <li>Fixed npc buffers starts moving when there's a murderer around them</li>
      </ul>
      <h4>[Beta 34.4 Changelog]</h4>
      <ul>
        <li>Quest system hotfix</li>
        <li>Added ability to clear player kills on reset &amp; grand reset.</li>
        <li>
          <u>
            You'll have to update your Reset &amp; GrandResetSystem.dat files by adding an extra 0 at the end of each
            line, or use the ones provided with the package
          </u>
        </li>
      </ul>
      <h4>[Beta 34.3 Changelog]</h4>
      <ul>
        <li>Fixed reset command check for empty inventory</li>
        <li>Attempt to fix monster attribute error on start up when npc buffers are enabled</li>
      </ul>
      <h4>[Beta 34.2 Changelog]</h4>
      <ul>
        <li>/tracemarry tweaked to work with MoveSystem.dat</li>
      </ul>
      <h4>[Beta 34.1 Changelog]</h4>
      <ul>
        <li>Fixed /tracemarry cooldown</li>
        <li>Quest system credits reward option added.</li>
        <li>
          <u>
            You'll have to update your Quests file by adding an extra 0 at the end of each quest, or use the one
            provided with the package
          </u>
        </li>
      </ul>
      <h4>[Beta 34 Changelog]</h4>
      <ul>
        <li>NPC buffers should no longer start moving after some time</li>
        <li>Fixed anti afk punishment type (0 = warp, 1 = disconnect)</li>
        <li>Added the missing ZenFormula option to the pkclear command</li>
        <li>Blocked all invalid/bad skins &amp; pets by default</li>
        <li>
          Added database for sql 2005 and up to the main package + odbc for win x64 (<u>base package only</u>)
        </li>
        <li>
          Improved anti afk system. Characters that are chatting but not moving will no longer be considered as afk
        </li>
        <li>
          Implemented a brand new vault dupe protection - <font color="DarkOrange">Hot!</font>
        </li>
        <li>Added /tracemarry blocked maps option</li>
        <li>Added /tracemarry cooldown option</li>
        <li>
          Added ability to control with how many excellent options the excellent items drops -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Replaced bor team's connectserver with webzen's one + patched it to work correctly on new operation systems.
          No more false antivirus alerts due to connectserver being packed (<u>base package only</u>)<br />
          Added starting level up points and zen options for newly created characters -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>Fixed quest system first quest being ignored</li>
        <li>
          Fixed a bug where Sky event, Reset &amp; Grand Reset commands would not add credits if the account is missing
          from MEMB_CREDITS table
        </li>
        <li>
          Implemented a new, experimental trade dupe protection - <font color="DarkOrange">Hot!</font>
        </li>
      </ul>
      <h4>[Beta 33.1 Changelog]</h4>
      <ul>
        <li>Fixed news system sending the default messages in some cases</li>
        <li>Fixed npc system min/max level usage</li>
        <li>Applied some fixes to the reset system</li>
        <li>Upgraded the grand reset command to advanced grand reset system</li>
        <li>Removed the unused options from Commands.ini which were forgotten in the previous beta</li>
      </ul>
      <h4>
        [Beta 33 Changelog - <font color="DarkOrange">Gold edition</font>]
      </h4>
      <ul>
        <li>Fixed disabling trade not working</li>
        <li>
          Completely reworked move system. You can now make some warps available only for vips -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Added a /charinfo command that will show player's current resets, grand resets, marriage info &amp; vip status
          expiration time
        </li>
        <li>Added a level up effect to /buyvip command</li>
        <li>
          Quest id variable removed from the quest system.<u>
            You'll have to update your quests file, or use the new one
          </u>.
        </li>
        <li>New, experimental party zen bug fix, including in devil square</li>
        <li>
          Improved shadow bug detection. No more skills learning at level one, using the shadow bug -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Added advanced messages system. You can finally translate all custom command/event/system messages -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Brand new, never seen before event - Lucky Jewels - <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Added advanced exp system with ability to set different bonus exp on every map. In addition, you can make
          zones with extra exp - <font color="DarkOrange">Hot!</font>
        </li>
        <li>VIP system improved with performance in mind</li>
        <li>
          Added advanced zen drop system. You can finally control monster's zen drop -{' '}
          <font color="DarkOrange">Exclusive!</font>
        </li>
        <li>
          Experimental syn flood protection - <font color="DarkOrange">Hot!</font>
        </li>
        <li>Fixed /buy &amp; /sell commands color #3</li>
        <li>
          Added advanced reset system with ability to set different requirements per class/vip/resets, different rewards
          per class/vip/resets - <font color="DarkOrange">Hot!</font>
        </li>
        <li>Fixed a bug where Sky event wasn't randomizing the excellent options when rewarding players</li>
        <li>
          Some additional corrections to the gm system. Fixed the expiration date &amp; automated the demotion process
          without the need of re-logging
        </li>
        <li>
          Added ability to make the vip system to work per account as well as per character -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Added advanced anti-afk system with ability to create safe zones per map/coords -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>Fixed map system file reading structure</li>
        <li>Added additional security checks to the npc talk protocol</li>
        <li>Added /setlevel &amp; /setzen commands</li>
        <li>Attempt to finally fix the crash on some server machines when checksum is enabled</li>
      </ul>
      <h4>[Beta 32 Changelog]</h4>
      <ul>
        <li>
          Brand new VIP System - <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Advanced npc buffers configuration file (+ability to add them on different maps, change npc's ids, ability to
          limit them to vips only, min/max level, resets, grand resets) - <font color="DarkOrange">Hot!</font>
        </li>
        <li>Added ability to enable/disable /questinfo command</li>
        <li>
          Added ability to change how blood castle award players (all party players or just the player who completes the
          quest)
        </li>
        <li>
          All player commands now works with the brand new vip system. You can now limit the commands to vips only.<br />
          Advanced map system with safe zones! Yes, you can finally create non pvp, pk free zones. -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>Game Masters can move using /move &lt;map name&gt;</li>
        <li>
          Added a check if the player will exceed the maximum amount of zen (2000000000) when selling, being rewarded in
          event or when picking up zen). No more bugged zen. - <font color="DarkOrange">Hot!</font>
        </li>
        <li>NPC's can no longer be killed using hacks</li>
        <li>Added ability to set (and show) Sky event's required item name</li>
        <li>Fully translated message_kor.wtf file with additional corrections</li>
        <li>Completely rewritten GM system. All known bugs fixed</li>
        <li>
          Advanced character stats system. Now you can limit strength, agility, vitality, energy per class -{' '}
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>Drop system completely recoded. Working way better now</li>
        <li>Improved /add command, integrated to work with the new character stats system</li>
        <li>Attack Speed is wrong log removed</li>
        <li>Added ability to completely disable gameserver logs</li>
        <li>Potions usage delay added</li>
        <li>Zombie pvp hack blocked</li>
        <li>Added ability to allow killers to enter devil square, blood castle and use shops</li>
        <li>Anti twisting slash use without weapon check added</li>
        <li>In case of missing custom sql columns, the gameserver will attempt to automatically create them</li>
        <li>Huge performance improvements</li>
      </ul>
      <h4>[Beta 31 Changelog]</h4>
      <ul>
        <li>Webzen Mu Game Server is already Running fixed</li>
        <li>Sub servers support added</li>
        <li>Patched all startup error logs</li>
      </ul>
      <h4>[Beta 30 Changelog]</h4>
      <ul>
        <li>
          Option to check if inventory is empty before reset - added (2 types, 1 = check equipment only, 2 = check whole
          inventory)
        </li>
        <li>Option to clear inventory after reset - added</li>
        <li>Elf greater damage &amp; defense buffs duration options - added</li>
        <li>Drop command can drop kris</li>
        <li>Party exp options fixed (party bonus event should also be working correctly now)</li>
        <li>Reduced sql queries</li>
      </ul>
      <h4>[Beta 29 Changelog]</h4>
      <ul>
        <li>Minor fixes</li>
        <li>
          Added support for excellent items in shops -
          <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          <u>You'll have to update your shop files by adding an additional 0 on each item</u>
        </li>
      </ul>
      <h4>[Beta 28 Changelog]</h4>
      <ul>
        <li>Checksum crash fixed</li>
        <li>More performance improvements</li>
      </ul>
      <h4>[Beta 27 Changelog]</h4>
      <ul>
        <li>English translated gameserver</li>
        <li>Sky event hotfix</li>
      </ul>
      <h4>[Beta 26 Changelog]</h4>
      <ul>
        <li>Character/guild leave without personal id - fixed</li>
        <li>Trade hack - blocked</li>
        <li>Guild notice sql injection - fixed (directly in gs).</li>
        <li>Pk bug - fixed (limit of 100 kills - removed)</li>
        <li>Post command delay option - added</li>
        <li>Spoof hack - blocked</li>
        <li>Disconnect hack detection - improved</li>
        <li>Trade with npc crash - fixed</li>
        <li>Sky event - improved</li>
        <li>Quest system - improved. No more crashes &amp; negative quests, hopefully.</li>
        <li>Elf arrows will no longer decrease (and then increase) when DecreaseElfArrows is set to 0</li>
        <li>Happy hour event - improved</li>
        <li>Performance improved by 80%, sql queries reduced by 60%</li>
        <li>2nd level wings success rate option - fixed</li>
        <li>
          Advanced Blood castle reward according to the room level - added (example: bc1 - box+1, bc2 - box+2, bc6 -
          box+5)
        </li>
        <li>Mana shield maximum percentage option - added</li>
        <li>Npc buffers (swell of life, mana shield, elf buffs) - added</li>
        <li>/pet command - added</li>
        <li>Swell of Life (bk buff) formula options - added</li>
        <li>Post command color #3 fixed</li>
        <li>Skin command blocked skins option - added</li>
      </ul>
      <h4>[Beta 25 Changelog]</h4>
      <ul>
        <li>CheckSum crash - Fixed</li>
        <li>Little corrections over the EventManager</li>
      </ul>
      <h4>[Beta 24 Changelog]</h4>
      <ul>
        <li>Critical bug fix</li>
      </ul>
      <h4>[Beta 23 Changelog]</h4>
      <ul>
        <li>
          Anti bad symbols in character name - Added - <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          Unique map system (pk free, non-pvp maps) - Added - <font color="DarkOrange">Unique!</font>
        </li>
        <li>Allow/Disallow pvp in sky event option - Added</li>
        <li>Little corrections in quest system</li>
      </ul>
      <h4>[Beta 22.2]</h4>
      <ul>
        <li>Some little corrections</li>
      </ul>
      <h4>[Beta 22 Changelog]</h4>
      <ul>
        <li>GM Login notice - Added</li>
        <li>
          [Move System] Required resets to move - Added - <font color="darkorange">Hot!</font>
        </li>
        <li>
          [Move System] Required grand resets to move - Added - <font color="darkorange">Hot!</font>
        </li>
        <li>F.O Items support in drop system - Added</li>
        <li>F.O Items support in Quest reward - Added</li>
        <li>F.O Items support in Sky Event Reward - Added</li>
        <li>Sky Event Respawn - Fixed</li>
        <li>Sky Event Min players option - Added</li>
        <li>Sky Event credits reward - Added</li>
        <li>Quest System Exp &amp; Levels reward - Fixed</li>
        <li>All other reported bugs - Fixed</li>
      </ul>
      <h4>[Beta 21 Changelog]</h4>
      <ul>
        <li>New Commands: /skin, /gg, /banpost, /unbanpost, /banchar, /unbanchar, /reload, /evo &amp; /grandreset</li>
        <li>
          Brand new Quest System (with 15 new quests) - <font color="darkorange">Hot!</font>
        </li>
        <li>New sql connection</li>
        <li>
          Unique drop system - <font color="darkorange">Hot!</font>
        </li>
        <li>Updated Event Manager</li>
        <li>
          Sky Event - <font color="red">(Download the new client)</font> - <font color="darkorange">Hot!</font>
        </li>
        <li>
          GM System - <font color="darkorange">Hot!</font>
        </li>
        <li>
          New Move System <font color="red">(game masters should use /gmove name map coords)</font> -{' '}
          <font color="darkorange">Hot!</font>
        </li>
        <li>Blood Castle Ranking</li>
        <li>Golden Archer</li>
        <li>Auto bugged stats fix on login</li>
        <li>Trade System</li>
        <li>
          Anti Disconnect Hack - <font color="darkorange">Hot!</font>
        </li>
        <li>
          Anti Vault Dupe - <font color="darkorange">Hot!</font>
        </li>
        <li>
          Anti Guild Crash - <font color="DarkOrange">Hot!</font>
        </li>
        <li>
          PvP / NoN PvP Support - <font color="darkorange">Hot!</font>
        </li>
      </ul>
      <h3 id="sc2">II. Client Updates:</h3>
      <div>
        <b>1. With this client you can start the game directly from main.exe</b>
      </div>
      <div>
        <b>2. Added a cell in Icarus for Sky Event</b>
      </div>
      <div className="img-list">
        <img src="http://store.picbg.net/thumb/FE/F4/a6b6a2474e7afef4.jpg" border="0" alt="" />
        <img src="http://store.picbg.net/thumb/BD/92/c85a21026f1dbd92.jpg" border="0" alt="" />
        <img src="http://store.picbg.net/thumb/EB/CF/c88fb61ec430ebcf.jpg" border="0" alt="" />
        <img src="http://store.picbg.net/thumb/C0/9B/9b3078ae147fc09b.jpg" border="0" alt="" />
      </div>
      <h3 id="sc3">III. Custom Commands</h3>
      <ul>
        <li>
          <b>/post</b>:
        </li>
        <li>
          <b>/addstr</b>:
        </li>
        <li>
          <b>/addagi</b>:
        </li>
        <li>
          <b>/addvit</b>:
        </li>
        <li>
          <b>/addene</b>:
        </li>
        <li>
          <b>/pkclear</b>:
        </li>
        <li>
          <b>/reset</b>:
        </li>
        <li>
          <b>/grandreset</b>:
        </li>
        <li>
          <b>/marry</b>:
        </li>
        <li>
          <b>/acceptmarry</b>:
        </li>
        <li>
          <b>/tracemarry</b>:
        </li>
        <li>
          <b>/marrystatus</b>:
        </li>
        <li>
          <b>/divorce</b>:
        </li>
        <li>
          <b>/getmarry</b>:
        </li>
        <li>
          <b>/time</b>:
        </li>
        <li>
          <b>/exit</b>:
        </li>
        <li>
          <b>/buy</b>:
        </li>
        <li>
          <b>/sell</b>:
        </li>
        <li>
          <b>/online</b>:
        </li>
        <li>
          <b>/clearinventory</b>:
        </li>
        <li>
          <b>/moveall</b>:
        </li>
        <li>
          <b>/vault</b>:
        </li>
        <li>
          <b>/questinfo</b>:
        </li>
        <li>
          <b>/skin</b>:
        </li>
        <li>
          <b>/gg</b>:
        </li>
        <li>
          <b>/drop</b>:
        </li>
        <li>
          <b>/banchar</b>:
        </li>
        <li>
          <b>/unbanchar</b>:
        </li>
        <li>
          <b>/banpost</b>:
        </li>
        <li>
          <b>/unbanpost</b>:
        </li>
        <li>
          <b>/reload</b>:
        </li>
        <li>
          <b>/evo</b>:
        </li>
        <li>
          <b>/pet</b>:
        </li>
        <li>
          <b>/buyvip</b>:
        </li>
        <li>
          <b>/vipinfo</b>:
        </li>
        <li>
          <b>/charinfo</b>:
        </li>
        <li>
          <b>/setlevel</b>:
        </li>
        <li>
          <b>/setzen</b>:
        </li>
      </ul>
      <h3 id="sc4">IV. Custom Events</h3>
      <ul>
        <li>Happy Hour</li>
        <li>Party Exp Bonus</li>
        <li>Sky Event</li>
        <li>
          Lucky Jewels - <font color="Red">Exclusive!</font>
        </li>
      </ul>
      <h3 id="sc5">V. Other Customs</h3>
      <ul>
        <li>Advanced Item Drop System</li>
        <li>Game Master System</li>
        <li>News System</li>
        <li>Unique Quest System</li>
        <li>Move System</li>
        <li>Trade System</li>
        <li>Event Manager</li>
        <li>Golden Archer</li>
        <li>Blood Castle Ranking</li>
        <li>Auto Bugged Stats fix on Login</li>
        <li>
          Advanced Map System with zones - <font color="Red">Unique!</font>
        </li>
        <li>
          Advanced Blood Castle Rewards - <font color="Red">New!</font>
        </li>
        <li>
          NPC Buffers - <font color="Red">New!</font>
        </li>
        <li>
          Support for Excellent items in shops - <font color="Red">New!</font>
        </li>
        <li>
          Ability to completely disable gameserver logs - <font color="Red">New!</font>
        </li>
        <li>
          Advanced Character Stats system - <font color="Red">New!</font>
        </li>
        <li>
          VIP System - <font color="Red">New!</font>
        </li>
        <li>
          Map Exp System - <font color="Red">New!</font>
        </li>
        <li>
          Anti Afk System - <font color="Red">New!</font>
        </li>
        <li>
          Zen Drop System - <font color="Red">New!</font>
        </li>
        <li>
          Advanced Reset &amp; Grand Reset systems - <font color="Red">New!</font>
        </li>
        <li>
          <font color="red">Over 500 Custom Config Options</font>
        </li>
      </ul>
      <h3 id="sc6">VI. Security</h3>
      <ul>
        <li>
          <b>Anti Disconnect Hack</b>
        </li>
        <li>
          <b>Anti Guild Crash</b>
        </li>
        <li>
          Anti Vault Dupe - <font color="Red">Improved!</font>
        </li>
        <li>Anti Bad Symbols in Character Name</li>
        <li>
          Anti Guild Notice Inject - <font color="Red">New!</font>
        </li>
        <li>
          Anti NPC Trade Crash - <font color="Red">New!</font>
        </li>
        <li>
          Anti Trade Hack - <font color="Red">New!</font>
        </li>
        <li>
          Anti Zombie Hack - <font color="Red">New!</font>
        </li>
        <li>
          Anti Twisting Slash Hack - <font color="Red">New!</font>
        </li>
        <li>
          Anti Shadow Bug - <font color="Red">New!</font>
        </li>
        <li>
          Anti Trade Dupe - <font color="Red">Unique!</font>
        </li>
        <li>
          Anti Syn Flood - <font color="Red">Unique!</font>
        </li>
        <li>
          Anti Golden Archer Dupe -<font color="Red">Unique!</font>
        </li>
      </ul>
      <h3 id="sc7">VII. Supported OS</h3>
      <ul>
        <li>Windows XP</li>
        <li>Windows Server 2003/2008/2012/2016</li>
        <li>Windows Vista</li>
        <li>Windows 7</li>
        <li>Windows 8</li>
        <li>Windows 10</li>
      </ul>
      <h3 id="sc8">VIII. Supported SQL Servers</h3>
      <ul>
        <li>2000, 2005, 2008, 2012, 2014, 2016 (All)</li>
      </ul>
      <h3 id="sc9">IX. Mirror Downloads</h3>
      <ul>
        <li>
          Base package (beta 36.1 ready):{' '}
          <a
            rel="nofollow"
            href="https://darksteam.net/attachment.php?attachmentid=4110&amp;d=1484815490"
            title={`Name:  DarksTeam MuServer 97d99i.rar 
Size:  2.09 MB`}>
            DarksTeam MuServer 97d99i.rar
          </a>
        </li>
        <li>
          Upgrade patch:{' '}
          <a
            rel="nofollow"
            href="https://darksteam.net/attachment.php?attachmentid=4230&amp;d=1516718014"
            title={`Name:  Beta 37.4 Patch.rar 
Size:  312.0 KB`}>
            Beta 37.4 Patch.rar
          </a>
        </li>
        <li>
          Full client with Sky event cell in Icarus:{' '}
          <a
            href="https://mega.nz/#%21hFhXRSBD%217dvescr18EqFtw6hxSDBiEGo0VM9nuHWZ8dpTlRm5fE"
            target="_blank"
            rel="noopener noreferrer">
            Click Here
          </a>
          (ip in main: 127.0.0.1)
        </li>
      </ul>
      <h3 id="sc10">IX. Credits</h3>
      <div className="text-center">
        <img src="/images/muonline/darksteam.gif" alt="DarksTeam"/>
        <br/>
        <font color="red">
          <b>
            Credits: WebZen &amp; DarksTeam <u>only</u>
          </b>
        </font>
      </div>
    </div>
  </div>
);
