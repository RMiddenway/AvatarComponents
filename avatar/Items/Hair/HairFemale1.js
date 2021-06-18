import React from "react";
import { Path } from "react-native-svg";
import colors from "../../../../config/colors";
import { useSelector } from "react-redux";

export const HairFemale1Front = ({colour}) => {
  const localColours = [colour ? colors[colour] : colors.hair_dark_Brown, colors.black];
  const gradientSteps = ['40', '80'];

  return (
    <>
       <Path id="hairfemale1front"
        fill={localColours[0]}
        d="M 504.00,350.00
           C 504.00,350.00 505.00,358.00 505.00,358.00
             506.54,354.13 505.69,351.09 506.76,347.00
             509.31,337.26 513.79,331.84 522.00,326.04
             543.30,311.00 564.25,310.94 581.00,297.39
             586.23,293.16 591.12,289.21 594.00,283.00
             594.00,283.00 607.00,290.69 607.00,290.69
             607.00,290.69 628.00,296.75 628.00,296.75
             628.00,296.75 658.00,308.45 658.00,308.45
             680.10,317.29 682.95,318.79 703.00,331.59
             703.00,331.59 719.00,342.46 719.00,342.46
             719.00,342.46 732.00,355.00 732.00,355.00
             736.04,359.04 739.62,362.42 743.10,367.00
             747.87,373.27 749.28,376.46 753.00,383.00
             756.09,388.44 766.37,409.65 767.00,415.00
             767.83,422.12 766.07,429.07 765.00,436.00
             765.00,436.00 769.00,429.00 769.00,429.00
             771.04,429.86 773.43,431.15 775.70,430.37
             777.97,429.59 780.47,425.88 782.00,424.01
             782.00,424.01 791.98,413.00 791.98,413.00
             801.44,401.02 815.17,371.95 819.12,357.00
             820.28,352.57 822.87,343.12 822.98,339.00
             823.24,329.42 818.20,317.67 809.99,312.33
             806.14,309.83 796.19,307.36 794.58,303.86
             794.58,303.86 788.55,283.00 788.55,283.00
             788.55,283.00 784.06,273.00 784.06,273.00
             784.06,273.00 773.68,247.00 773.68,247.00
             763.14,226.92 742.01,201.95 722.00,191.18
             710.55,185.01 697.01,181.46 684.00,181.04
             684.00,181.04 670.00,181.90 670.00,181.90
             662.36,181.22 661.53,178.02 649.00,178.00
             649.00,178.00 631.00,178.00 631.00,178.00
             621.26,178.02 614.34,180.30 605.00,182.20
             570.68,189.17 546.29,199.37 523.28,227.00
             518.99,232.15 513.86,239.86 511.17,246.00
             508.86,251.28 506.23,260.11 503.16,265.00
             499.65,270.61 487.62,281.33 483.93,295.00
             481.76,303.00 484.04,311.48 483.28,315.00
             482.11,320.40 476.16,327.03 476.00,339.00
             476.00,339.00 476.00,348.00 476.00,348.00
             476.14,359.93 481.27,371.44 480.34,389.00
             479.92,397.04 477.74,397.26 477.28,399.98
             476.69,403.43 480.11,405.16 483.00,405.64
             490.01,406.80 492.52,399.30 494.19,394.00
             498.79,379.38 497.15,363.37 504.00,350.00 Z" />
             <Path id="hairfemale1frontoutline"
        fill={localColours[1] + gradientSteps[0]}
        d="M 504.00,350.00
           C 504.00,350.00 505.00,358.00 505.00,358.00
             506.54,354.13 505.69,351.09 506.76,347.00
             509.31,337.26 513.79,331.84 522.00,326.04
             543.30,311.00 564.25,310.94 581.00,297.39
             586.23,293.16 591.12,289.21 594.00,283.00
             594.00,283.00 607.00,290.69 607.00,290.69
             607.00,290.69 628.00,296.75 628.00,296.75
             628.00,296.75 658.00,308.45 658.00,308.45
             680.10,317.29 682.95,318.79 703.00,331.59
             703.00,331.59 719.00,342.46 719.00,342.46
             719.00,342.46 732.00,355.00 732.00,355.00
             736.04,359.04 739.62,362.42 743.10,367.00
             747.87,373.27 749.28,376.46 753.00,383.00
             756.09,388.44 766.37,409.65 767.00,415.00
             767.83,422.12 766.07,429.07 765.00,436.00
             765.00,436.00 769.00,429.00 769.00,429.00
             771.04,429.86 773.43,431.15 775.70,430.37
             777.97,429.59 780.47,425.88 782.00,424.01
             782.00,424.01 791.98,413.00 791.98,413.00
             801.44,401.02 815.17,371.95 819.12,357.00
             820.28,352.57 822.87,343.12 822.98,339.00
             823.24,329.42 818.20,317.67 809.99,312.33
             806.14,309.83 796.19,307.36 794.58,303.86
             794.58,303.86 788.55,283.00 788.55,283.00
             788.55,283.00 784.06,273.00 784.06,273.00
             784.06,273.00 773.68,247.00 773.68,247.00
             763.14,226.92 742.01,201.95 722.00,191.18
             710.55,185.01 697.01,181.46 684.00,181.04
             684.00,181.04 670.00,181.90 670.00,181.90
             662.36,181.22 661.53,178.02 649.00,178.00
             649.00,178.00 631.00,178.00 631.00,178.00
             621.26,178.02 614.34,180.30 605.00,182.20
             570.68,189.17 546.29,199.37 523.28,227.00
             518.99,232.15 513.86,239.86 511.17,246.00
             508.86,251.28 506.23,260.11 503.16,265.00
             499.65,270.61 487.62,281.33 483.93,295.00
             481.76,303.00 484.04,311.48 483.28,315.00
             482.11,320.40 476.16,327.03 476.00,339.00
             476.00,339.00 476.00,348.00 476.00,348.00
             476.14,359.93 481.27,371.44 480.34,389.00
             479.92,397.04 477.74,397.26 477.28,399.98
             476.69,403.43 480.11,405.16 483.00,405.64
             490.01,406.80 492.52,399.30 494.19,394.00
             498.79,379.38 497.15,363.37 504.00,350.00 Z
           M 786.00,305.00
           C 786.00,305.00 755.00,300.27 755.00,300.27
             755.00,300.27 713.00,294.73 713.00,294.73
             684.85,290.71 655.51,288.62 630.00,274.69
             623.58,271.19 618.78,266.51 613.00,262.25
             611.60,261.22 608.48,259.20 607.17,261.54
             605.32,264.83 612.82,270.42 615.00,272.11
             626.35,280.89 635.79,284.61 649.00,289.58
             663.22,294.92 681.88,297.29 697.00,299.28
             697.00,299.28 753.00,306.85 753.00,306.85
             765.38,308.33 794.14,311.77 804.00,317.99
             823.63,330.39 811.67,357.68 804.58,374.00
             804.58,374.00 799.25,385.00 799.25,385.00
             799.25,385.00 791.80,399.00 791.80,399.00
             787.66,405.85 782.39,414.50 775.00,418.00
             773.43,411.11 770.68,405.46 768.01,399.00
             763.41,387.86 756.42,373.61 749.24,364.00
             745.12,358.48 739.99,353.62 735.00,348.91
             735.00,348.91 724.00,338.30 724.00,338.30
             716.32,331.72 693.15,316.85 684.00,312.27
             684.00,312.27 631.00,290.74 631.00,290.74
             631.00,290.74 613.00,285.90 613.00,285.90
             606.70,283.72 599.61,279.43 597.01,273.00
             595.26,268.68 597.17,259.47 592.42,259.42
             589.20,259.40 589.01,264.82 589.02,267.00
             589.04,270.11 590.06,274.39 589.57,277.00
             588.41,283.23 579.83,289.94 575.00,293.71
             566.10,300.66 555.24,302.84 545.00,306.81
             525.45,314.39 505.39,326.10 496.51,346.00
             492.10,355.89 490.43,371.13 489.00,382.00
             487.45,378.10 488.19,373.60 487.39,369.00
             484.07,350.07 481.25,337.04 490.27,319.00
             494.44,310.67 498.28,304.85 505.98,299.42
             507.62,298.27 511.44,295.95 509.97,293.45
             508.71,291.21 505.60,292.62 504.00,293.45
             499.25,296.12 495.49,300.79 491.00,304.00
             491.41,286.05 508.23,269.54 523.00,261.31
             529.89,257.47 534.08,254.39 542.00,253.03
             543.74,252.74 546.80,252.38 546.80,249.96
             546.80,245.89 540.57,246.27 538.00,246.93
             538.00,246.93 515.00,258.00 515.00,258.00
             520.06,242.84 524.01,237.63 534.91,226.00
             539.72,220.88 545.33,215.07 551.00,210.93
             565.11,200.63 586.05,194.45 603.00,190.79
             612.38,188.77 621.34,186.02 631.00,186.16
             631.00,186.16 655.00,186.16 655.00,186.16
             655.00,186.16 668.00,190.16 668.00,190.16
             668.00,190.16 685.00,189.04 685.00,189.04
             695.83,189.51 706.16,192.67 716.00,197.04
             736.61,206.18 757.91,232.97 767.88,253.00
             767.88,253.00 775.81,273.00 775.81,273.00
             780.02,283.86 785.44,292.93 786.00,305.00 Z" />
    </>
  );
};
export const HairFemale1Back = ({colour}) => {
  const localColours = [colour ? colors[colour] : colors.hair_dark_Brown, colors.black];
  var hatColour  = useSelector((state) => state.entities.avatar.avatarcomponentcolors.hatColour);
  const gradientSteps = ['40', '80'];

  return (
    <>
       <Path id="hairfemale1back"
        fill={localColours[0]}
        d="M 715.00,484.27
           C 709.25,486.51 705.78,491.72 701.00,495.48
             701.00,495.48 681.00,508.33 681.00,508.33
             672.24,514.17 663.37,519.69 654.00,524.51
             650.37,526.38 642.90,528.23 640.57,530.80
             638.67,532.90 638.95,536.33 639.01,539.00
             639.20,547.39 642.15,554.17 644.66,562.00
             647.91,572.18 648.67,576.31 654.45,586.00
             665.73,604.91 683.50,618.24 703.00,627.74
             726.15,639.03 741.72,638.42 762.00,658.04
             766.87,662.76 770.63,667.60 773.05,674.00
             776.39,682.83 775.62,689.10 781.94,697.00
             791.73,709.24 810.06,715.49 822.95,730.00
             827.11,734.69 831.01,739.65 834.29,745.00
             834.29,745.00 837.92,751.77 837.92,751.77
             839.44,753.83 842.16,755.25 844.77,754.66
             847.55,754.04 847.92,751.40 847.49,749.00
             846.87,745.56 843.64,741.01 844.30,734.00
             844.30,734.00 854.00,665.00 854.00,665.00
             853.71,640.48 842.85,621.29 830.60,601.00
             825.90,593.20 814.25,576.04 807.96,570.17
             804.16,566.63 791.89,558.84 787.00,555.92
             783.99,554.12 779.84,552.58 777.72,549.79
             775.52,546.89 775.28,540.97 769.25,532.00
             758.84,516.51 748.66,506.95 734.00,495.77
             729.10,492.03 721.13,484.60 715.00,484.27 Z" />
             <Path id="hairfemale1backoutline"
        fill={localColours[1] + gradientSteps[0]}
        d="M 715.00,484.27
           C 709.25,486.51 705.78,491.72 701.00,495.48
             701.00,495.48 681.00,508.33 681.00,508.33
             672.24,514.17 663.37,519.69 654.00,524.51
             650.37,526.38 642.90,528.23 640.57,530.80
             638.67,532.90 638.95,536.33 639.01,539.00
             639.20,547.39 642.15,554.17 644.66,562.00
             647.91,572.18 648.67,576.31 654.45,586.00
             665.73,604.91 683.50,618.24 703.00,627.74
             726.15,639.03 741.72,638.42 762.00,658.04
             766.87,662.76 770.63,667.60 773.05,674.00
             776.39,682.83 775.62,689.10 781.94,697.00
             791.73,709.24 810.06,715.49 822.95,730.00
             827.11,734.69 831.01,739.65 834.29,745.00
             834.29,745.00 837.92,751.77 837.92,751.77
             839.44,753.83 842.16,755.25 844.77,754.66
             847.55,754.04 847.92,751.40 847.49,749.00
             846.87,745.56 843.64,741.01 844.30,734.00
             844.30,734.00 854.00,665.00 854.00,665.00
             853.71,640.48 842.85,621.29 830.60,601.00
             825.90,593.20 814.25,576.04 807.96,570.17
             804.16,566.63 791.89,558.84 787.00,555.92
             783.99,554.12 779.84,552.58 777.72,549.79
             775.52,546.89 775.28,540.97 769.25,532.00
             758.84,516.51 748.66,506.95 734.00,495.77
             729.10,492.03 721.13,484.60 715.00,484.27 Z
           M 777.00,560.00
           C 782.63,561.64 785.21,563.84 790.00,567.00
             804.85,576.79 806.44,579.66 816.85,594.00
             816.85,594.00 827.45,611.00 827.45,611.00
             836.52,626.13 844.78,641.91 845.00,660.00
             845.00,660.00 845.00,673.00 845.00,673.00
             844.95,683.50 840.43,706.89 838.42,718.00
             838.42,718.00 836.00,733.00 836.00,733.00
             836.00,733.00 820.72,715.00 820.72,715.00
             808.27,700.61 805.49,699.52 796.75,682.00
             793.57,675.63 791.63,672.37 792.09,665.00
             792.25,662.45 793.57,657.68 790.87,656.03
             786.86,653.59 785.49,663.88 785.32,666.00
             784.36,678.06 795.90,691.27 800.00,702.00
             783.54,692.75 786.51,683.98 779.69,669.00
             776.14,661.20 771.22,655.87 765.00,650.09
             746.79,633.14 728.75,630.85 707.00,621.14
             685.05,611.34 662.93,592.20 655.00,569.00
             655.00,569.00 647.65,545.00 647.65,545.00
             647.05,542.46 645.70,537.73 647.06,535.39
             648.32,533.22 653.66,530.93 656.00,529.55
             656.00,529.55 678.00,516.77 678.00,516.77
             678.00,516.77 705.00,498.92 705.00,498.92
             707.71,497.41 712.13,494.02 715.00,493.96
             719.60,493.85 729.19,501.76 733.00,504.63
             743.11,512.22 760.84,530.58 766.10,542.00
             768.67,547.59 769.92,553.87 769.95,560.00
             769.95,560.00 769.95,574.00 769.95,574.00
             769.95,574.00 768.99,585.00 768.99,585.00
             768.96,587.12 768.42,591.80 770.50,593.09
             774.27,595.42 775.02,587.91 775.28,586.00
             776.72,575.48 777.00,570.56 777.00,560.00 Z" />
    </>
  );
};
