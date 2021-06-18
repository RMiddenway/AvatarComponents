
import React from 'react'
import { Path } from 'react-native-svg'
import colors from "../../../../config/colors";

export const MaleHead2 = ({colour}) => {

    const localColours = [
      colour,
      colors.black,
      colors.hair_mid_brown,
      colors.hair_dark_Brown];
    const gradientSteps = ['40', '80'];

    return (
        <>
           <Path id="skin"
        fill={localColours[0]}
        d="M 780.00,319.00
           C 779.76,307.88 772.49,287.31 767.77,277.00
             758.64,257.04 743.53,235.17 725.00,222.90
             710.17,213.08 674.86,203.03 657.00,203.00
             657.00,203.00 636.00,203.00 636.00,203.00
             628.22,203.01 620.68,204.46 613.00,205.57
             588.94,209.06 574.60,212.84 554.00,226.48
             554.00,226.48 544.00,233.17 544.00,233.17
             535.98,239.71 528.24,249.48 522.37,258.00
             515.12,268.51 508.94,288.30 507.06,301.00
             507.06,301.00 507.06,309.00 507.06,309.00
             506.30,314.51 504.75,321.64 505.09,327.00
             505.09,327.00 508.44,355.00 508.44,355.00
             509.91,364.35 511.99,373.47 512.00,383.00
             512.00,383.00 512.00,392.00 512.00,392.00
             512.00,392.00 511.04,402.00 511.04,402.00
             511.04,402.00 511.04,418.00 511.04,418.00
             511.02,433.93 520.66,463.26 527.31,478.00
             527.31,478.00 536.90,497.00 536.90,497.00
             536.90,497.00 552.80,532.00 552.80,532.00
             555.75,539.31 559.78,550.29 566.09,555.21
             576.94,563.67 592.90,563.15 606.00,563.00
             620.71,562.82 633.21,554.53 646.00,548.26
             669.73,536.62 683.62,525.28 704.00,509.21
             704.00,509.21 720.91,496.34 720.91,496.34
             720.91,496.34 745.68,472.00 745.68,472.00
             750.70,465.99 759.02,454.14 762.05,447.00
             762.05,447.00 770.13,426.09 770.13,426.09
             772.34,422.88 776.03,420.60 778.96,418.00
             778.96,418.00 794.20,402.83 794.20,402.83
             804.05,391.31 805.32,379.12 811.31,366.00
             815.56,356.69 822.43,346.49 821.96,336.00
             821.61,328.20 815.63,317.46 808.00,314.72
             805.62,313.87 802.53,314.00 800.00,314.00
             797.10,314.00 790.52,313.77 788.04,314.51
             785.88,315.14 782.21,317.73 780.00,319.00 Z"/>
             <Path id="skin outline"
        fill={localColours[1] + gradientSteps[0]}
        d="M 780.00,319.00
           C 779.76,307.88 772.49,287.31 767.77,277.00
             758.64,257.04 743.53,235.17 725.00,222.90
             710.17,213.08 674.86,203.03 657.00,203.00
             657.00,203.00 636.00,203.00 636.00,203.00
             628.22,203.01 620.68,204.46 613.00,205.57
             588.94,209.06 574.60,212.84 554.00,226.48
             554.00,226.48 544.00,233.17 544.00,233.17
             535.98,239.71 528.24,249.48 522.37,258.00
             515.12,268.51 508.94,288.30 507.06,301.00
             507.06,301.00 507.06,309.00 507.06,309.00
             506.30,314.51 504.75,321.64 505.09,327.00
             505.09,327.00 508.44,355.00 508.44,355.00
             509.91,364.35 511.99,373.47 512.00,383.00
             512.00,383.00 512.00,392.00 512.00,392.00
             512.00,392.00 511.04,402.00 511.04,402.00
             511.04,402.00 511.04,418.00 511.04,418.00
             511.02,433.93 520.66,463.26 527.31,478.00
             527.31,478.00 536.90,497.00 536.90,497.00
             536.90,497.00 552.80,532.00 552.80,532.00
             555.75,539.31 559.78,550.29 566.09,555.21
             576.94,563.67 592.90,563.15 606.00,563.00
             620.71,562.82 633.21,554.53 646.00,548.26
             669.73,536.62 683.62,525.28 704.00,509.21
             704.00,509.21 720.91,496.34 720.91,496.34
             720.91,496.34 745.68,472.00 745.68,472.00
             750.70,465.99 759.02,454.14 762.05,447.00
             762.05,447.00 770.13,426.09 770.13,426.09
             772.34,422.88 776.03,420.60 778.96,418.00
             778.96,418.00 794.20,402.83 794.20,402.83
             804.05,391.31 805.32,379.12 811.31,366.00
             815.56,356.69 822.43,346.49 821.96,336.00
             821.61,328.20 815.63,317.46 808.00,314.72
             805.62,313.87 802.53,314.00 800.00,314.00
             797.10,314.00 790.52,313.77 788.04,314.51
             785.88,315.14 782.21,317.73 780.00,319.00 Z
           M 775.00,327.00
           C 778.05,324.68 780.55,322.44 784.00,320.63
             794.71,315.03 808.69,314.79 813.60,328.00
             814.82,331.28 814.96,333.57 815.00,337.00
             815.16,351.08 810.05,354.06 805.47,366.00
             800.56,378.78 802.57,385.81 791.67,399.00
             791.67,399.00 777.96,413.67 777.96,413.67
             773.84,417.23 770.26,418.15 766.39,423.02
             762.79,427.54 761.61,435.31 759.13,441.00
             757.31,445.15 749.79,456.88 746.97,461.00
             746.97,461.00 737.46,473.00 737.46,473.00
             737.46,473.00 729.82,482.96 729.82,482.96
             729.82,482.96 695.00,512.08 695.00,512.08
             686.34,519.27 660.80,536.82 651.00,541.75
             635.82,549.40 620.48,558.97 603.00,559.00
             594.81,559.01 579.00,558.44 572.00,554.47
             562.94,549.32 559.63,540.12 556.09,531.00
             556.09,531.00 549.31,516.00 549.31,516.00
             549.31,516.00 543.75,503.00 543.75,503.00
             534.26,483.83 528.81,472.42 522.00,452.00
             518.30,440.89 515.02,430.85 515.25,419.00
             515.25,419.00 515.25,395.00 515.25,395.00
             515.25,395.00 517.96,377.00 517.96,377.00
             518.24,370.11 516.10,364.77 515.13,358.00
             515.13,358.00 511.04,319.00 511.04,319.00
             510.73,310.95 514.42,294.83 517.00,287.00
             520.91,275.15 523.40,268.45 530.72,258.00
             536.29,250.04 538.93,248.07 546.00,241.85
             552.78,235.88 564.89,227.12 573.00,223.32
             590.40,215.18 621.69,210.95 641.00,210.10
             641.00,210.10 654.00,211.00 654.00,211.00
             654.00,211.00 662.00,211.00 662.00,211.00
             669.16,211.01 684.17,212.83 691.00,214.75
             737.75,227.85 763.25,271.07 772.45,316.00
             772.45,316.00 775.00,327.00 775.00,327.00 Z
           M 519.00,375.00
           C 519.00,375.00 529.00,371.29 529.00,371.29
             534.20,369.66 545.01,369.22 550.00,371.29
             556.16,374.02 560.75,379.67 567.00,383.00
             563.71,376.11 555.45,370.87 548.00,369.19
             545.41,368.86 540.79,369.00 538.00,369.19
             532.16,369.01 522.51,369.79 519.00,375.00 Z
           M 602.00,386.00
           C 606.27,382.98 610.00,378.97 615.00,377.13
             623.89,373.87 635.95,377.26 645.00,378.00
             640.93,375.36 634.80,375.06 630.00,375.00
             619.31,374.88 607.55,374.83 602.00,386.00 Z
           M 646.00,378.00
           C 646.00,378.00 656.00,384.00 656.00,384.00
             652.72,380.28 650.71,379.35 646.00,378.00 Z" />
             <Path id="nose1"
        fill={localColours[1] + gradientSteps[0]}
        d="M 572.00,378.00
           C 572.00,397.48 569.25,413.54 563.00,432.00
             560.38,439.72 552.11,450.33 554.29,457.78
             555.62,462.31 566.88,462.83 571.00,462.96
             571.00,462.96 579.00,462.32 579.00,462.32
             579.00,462.32 590.96,462.95 590.96,462.95
             592.77,462.83 594.48,462.62 595.71,461.13
             597.50,458.98 597.00,452.82 597.00,450.00
             597.00,450.00 593.00,450.00 593.00,450.00
             593.00,450.00 591.40,457.31 591.40,457.31
             591.40,457.31 583.00,458.01 583.00,458.01
             583.00,458.01 573.00,458.63 573.00,458.63
             573.00,458.63 558.00,457.00 558.00,457.00
             558.70,450.47 565.05,441.30 567.98,432.00
             574.26,412.01 576.00,398.86 576.00,378.00
             576.00,378.00 572.00,378.00 572.00,378.00 Z" />
             <Path id="Brows"
        fill={localColours[3]}
        d="M 513.00,354.00
           C 513.00,354.00 526.00,353.01 526.00,353.01
             526.00,353.01 554.00,356.00 554.00,356.00
             557.58,356.47 564.68,357.73 564.72,352.05
             564.76,346.40 554.07,345.41 550.00,344.95
             538.04,343.60 540.98,342.44 528.00,343.84
             520.32,344.66 515.48,345.56 513.00,354.00 Z
           M 666.00,356.00
           C 664.06,352.67 662.57,350.91 658.96,349.07
             650.11,345.08 629.71,347.33 620.00,349.07
             615.43,349.67 604.29,349.85 604.29,356.00
             604.29,362.93 613.82,360.76 618.00,360.08
             637.47,356.89 646.26,356.00 666.00,356.00 Z" />
             <Path id="mouth2"
        fill={localColours[1] +  gradientSteps[1]}
        d="M 555.00,486.00
           C 555.00,486.00 555.00,490.00 555.00,490.00
             555.00,490.00 601.00,492.00 601.00,492.00
             610.86,491.87 616.72,487.06 617.00,477.00
             611.65,478.81 612.66,481.20 608.81,484.61
             605.38,487.65 602.35,487.94 598.00,488.00
             598.00,488.00 584.00,488.00 584.00,488.00
             584.00,488.00 555.00,486.00 555.00,486.00 Z" />
        </>
    )
}

