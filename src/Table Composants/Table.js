import { TableBody } from "./TableBody";
import { THead } from "./THead";

export function Table(params) {
    return(
        <table id="datatablesSimple" className="table table-bordered">                             
                <thead>
                    <THead label1="Name" label2="Position" label3="Office" label4="Age" label5="Start date" label6="Salary" />
                </thead>
                <tfoot>
                    <THead label1="Name" label2="Position" label3="Office" label4="Age" label5="Start date" label6="Salary" />     
                </tfoot>
                <tbody>
                    <TableBody label1="Tiger Nixon" label2="System Architect" label3="Edinburgh" label4="61" label5="2011/04/25" label6="$320,800" />
                    <TableBody label1="Garrett Winters" label2="Accountant" label3="Tokyo" label4="63" label5="2011/07/25" label6="$170,750" />
                    <TableBody label1="Ashton Cox" label2="Junior Technical Author" label3="San Francisco" label4="66" label5="2009/01/12" label6="$86,000" />
                    <TableBody label1="Cedric Kelly" label2="Senior Javascript Developer" label3="Edinburgh" label4="22" label5="2012/03/29" label6="$433,060" />
                    <TableBody label1="Airi Satou" label2="Accountant" label3="Tokyo" label4="33" label5="2008/11/28" label6="$162,700" />
                    <TableBody label1="Brielle Williamson" label2="Integration Specialist" label3="New York" label4="61" label5="2012/12/02" label6="$372,000" />
                    <TableBody label1="Herrod Chandler" label2="Sales Assistant" label3="San Francisco" label4="59" label5="2012/08/06" label6="$137,500" />
                    <TableBody label1="Rhona Davidson" label2="Integration Specialist" label3="Tokyo" label4="55" label5="2010/10/14" label6="$327,900" />
                    <TableBody label1="Colleen Hurst" label2="Javascript Developer" label3="San Francisco" label4="39" label5="2009/09/15" label6="$205,500" />
                    <TableBody label1="Sonya Frost" label2="Software Engineer" label3="Edinburgh" label4="23" label5="2008/12/13" label6="$103,600" />
                    <TableBody label1="Jena Gaines" label2="Office Manager" label3="London" label4="30" label5="2008/12/19" label6="$90,560" />
                    <TableBody label1="Quinn Flynn" label2="Support Lead" label3="Edinburgh" label4="22" label5="2013/03/03" label6="$342,000" />
                    <TableBody label1="Charde Marshall" label2="Regional Director" label3="San Francisco" label4="36" label5="2008/10/16" label6="$470,600" />
                    <TableBody label1="Haley Kennedy" label2="Senior Marketing Designer" label3="London" label4="43" label5="2012/12/18" label6="$313,500" />
                    <TableBody label1="Tatyana Fitzpatrick" label2="Regional Director" label3="London" label4="19" label5="2010/03/17" label6="$385,750" />
                    <TableBody label1="Michael Silva" label2="Marketing Designer" label3="London" label4="66" label5="2012/11/27" label6="$198,500" />
                    <TableBody label1="Paul Byrd" label2="Chief Financial Officer (CFO)" label3="New York" label4="64" label5="2010/06/09" label6="$725,000" />
                    <TableBody label1="Gloria Little" label2="Systems Administrator" label3="New York" label4="59" label5="2009/04/10" label6="$237,500" />
                    <TableBody label1="Bradley Greer" label2="Software Engineer" label3="London" label4="41" label5="2012/10/13" label6="$132,000" />
                    <TableBody label1="Dai Rios" label2="Personnel Lead" label3="Edinburgh" label4="35" label5="2012/09/26" label6="$217,500" />
                    <TableBody label1="Jenette Caldwell" label2="Development Lead" label3="New York" label4="30" label5="2011/09/03" label6="$345,000" />
                    <TableBody label1="Yuri Berry" label2="Chief Marketing Officer (CMO)" label3="New York" label4="40" label5="2009/06/25" label6="$675,000" />
                    <TableBody label1="Caesar Vance" label2="Pre-Sales Support" label3="New York" label4="21" label5="2011/12/12" label6="$106,450" />
                    <TableBody label1="Doris Wilder" label2="Sales Assistant" label3="Sidney" label4="23" label5="2010/09/20" label6="$85,600" />
                    <TableBody label1="Angelica Ramos" label2="Chief Executive Officer (CEO)" label3="London" label4="47" label5="2009/10/09" label6="$1,200,000" />
                    <TableBody label1="Gavin Joyce" label2="Developer" label3="Edinburgh" label4="42" label5="2010/12/22" label6="$92,575" />
                    <TableBody label1="Jennifer Chang" label2="Regional Director" label3="Singapore" label4="28" label5="2010/11/14" label6="$357,650" />
                    <TableBody label1="Brenden Wagner" label2="Software Engineer" label3="San Francisco" label4="28" label5="2011/06/07" label6="$206,850" />
                    <TableBody label1="Fiona Green" label2="Chief Operating Officer (COO)" label3="San Francisco" label4="48" label5="2010/03/11" label6="$850,000" />
                    <TableBody label1="Shou Itou" label2="Regional Marketing" label3="Tokyo" label4="20" label5="2011/08/14" label6="$163,000" />
                    <TableBody label1="Michelle House" label2="Integration Specialist" label3="Sidney" label4="37" label5="2011/06/02" label6="$95,400" />
                    <TableBody label1="Suki Burks" label2="Developer" label3="London" label4="53" label5="2009/10/22" label6="$114,500" />
                    <TableBody label1="Prescott Bartlett" label2="Technical Author" label3="London" label4="27" label5="2011/05/07" label6="$145,000" />
                    <TableBody label1="Gavin Cortez" label2="Team Leader" label3="San Francisco" label4="22" label5="2008/10/26" label6="$235,500" />
                    <TableBody label1="Martena Mccray" label2="Post-Sales support" label3="Edinburgh" label4="46" label5="2011/03/09" label6="$324,050" />
                    <TableBody label1="Unity Butler" label2="Marketing Designer" label3="San Francisco" label4="47" label5="2009/12/09" label6="$85,675" />
                    <TableBody label1="Howard Hatfield" label2="Office Manager" label3="San Francisco" label4="51" label5="2008/12/16" label6="$164,500" />
                    <TableBody label1="Hope Fuentes" label2="Secretary" label3="San Francisco" label4="41" label5="2010/02/12" label6="$109,850" />
                    <TableBody label1="Vivian Harrell" label2="Financial Controller" label3="San Francisco" label4="62" label5="2009/02/14" label6="$452,500" />
                    <TableBody label1="Timothy Mooney" label2="Office Manager" label3="London" label4="37" label5="2008/12/11" label6="$136,200" />
                    <TableBody label1="Jackson Bradshaw" label2="Director" label3="New York" label4="65" label5="2008/09/26" label6="$645,750" />
                    <TableBody label1="Olivia Liang" label2="Support Engineer" label3="Singapore" label4="64" label5="2011/02/03" label6="$234,500" />
                    <TableBody label1="Bruno Nash" label2="Software Engineer" label3="London" label4="38" label5="2011/05/03" label6="$163,500" />
                    <TableBody label1="Sakura Yamamoto" label2="Support Engineer" label3="Tokyo" label4="37" label5="2009/08/19" label6="$139,575" />
                    <TableBody label1="Thor Walton" label2="Developer" label3="New York" label4="61" label5="2013/08/11" label6="$98,540" />
                    <TableBody label1="Finn Camacho" label2="Support Engineer" label3="San Francisco" label4="47" label5="2009/07/07" label6="$87,500" />
                    <TableBody label1="Serge Baldwin" label2="Data Coordinator" label3="Singapore" label4="64" label5="2012/04/09" label6="$138,575" />
                    <TableBody label1="Zenaida Frank" label2="Software Engineer" label3="New York" label4="63" label5="2010/01/04" label6="$125,250" />
                    <TableBody label1="Zorita Serrano" label2="Software Engineer" label3="San Francisco" label4="56" label5="2012/06/01" label6="$115,000" />
                    <TableBody label1="Jennifer Acosta" label2="Junior Javascript Developer" label3="Edinburgh" label4="43" label5="2013/02/01" label6="$75,650" />
                    <TableBody label1="Cara Stevens" label2="Sales Assistant" label3="New York" label4="46" label5="2011/12/06" label6="$145,600" />
                    <TableBody label1="Hermione Butler" label2="Regional Director" label3="London" label4="47" label5="2011/03/21" label6="$356,250" />
                    <TableBody label1="Lael Greer" label2="Systems Administrator" label3="London" label4="21" label5="2009/02/27" label6="$103,500" />
                    <TableBody label1="Jonas Alexander" label2="Developer" label3="San Francisco" label4="30" label5="2010/07/14" label6="$86,500" />
                    <TableBody label1="Shad Decker" label2="Regional Director" label3="Edinburgh" label4="51" label5="2008/11/13" label6="$183,000" />
                    <TableBody label1="Michael Bruce" label2="Javascript Developer" label3="Singapore" label4="29" label5="2011/06/27" label6="$183,000" />
                    <TableBody label1="Donna Snider" label2="Customer Support" label3="New York" label4="27" label5="2011/01/25" label6="$112,000" />   
                </tbody>
              </table>
    );
}
