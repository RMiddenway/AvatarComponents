import React from "react";
import { Path } from "react-native-svg";
import colors from "../../../../config/colors";

export const ScrubCapTransparent = ({colour}) => {
  const localColours = [colors.scrubs_pale_teal, colors.hair_dark_Brown];
  const gradientSteps = ['40', '80']
  
  return (
    <>
       <Path id="scrubcaptransparentunderhair"
        fill={localColours[1]}
        d="M 747.00,348.00
           C 755.77,343.78 761.95,339.71 772.00,338.57
             777.92,337.53 782.23,341.16 785.43,338.57
             788.02,336.91 788.00,328.07 788.00,325.00
             788.02,309.11 786.52,296.66 779.68,282.00
             779.68,282.00 768.78,263.00 768.78,263.00
             768.78,263.00 762.90,255.00 762.90,255.00
             762.90,255.00 758.16,247.00 758.16,247.00
             752.89,239.37 738.72,224.55 731.00,219.22
             722.94,213.65 708.58,206.59 699.00,204.52
             699.00,204.52 672.00,201.79 672.00,201.79
             663.39,200.58 657.27,198.01 648.00,198.00
             648.00,198.00 634.00,198.00 634.00,198.00
             626.15,198.04 600.68,202.29 593.00,204.57
             582.83,207.59 566.96,216.70 558.00,222.67
             558.00,222.67 541.00,234.32 541.00,234.32
             524.33,248.21 512.80,264.95 507.63,286.00
             506.55,290.37 505.21,295.53 505.04,300.00
             504.93,302.87 504.95,307.20 507.01,309.43
             508.60,311.16 512.73,311.63 515.00,311.83
             515.00,311.83 539.00,311.00 539.00,311.00
             539.00,311.00 557.00,311.00 557.00,311.00
             557.00,311.00 581.00,313.00 581.00,313.00
             581.00,313.00 615.00,316.06 615.00,316.06
             615.00,316.06 624.00,316.06 624.00,316.06
             624.00,316.06 650.00,320.72 650.00,320.72
             650.00,320.72 666.00,322.17 666.00,322.17
             666.00,322.17 692.00,325.58 692.00,325.58
             692.00,325.58 708.00,327.46 708.00,327.46
             708.00,327.46 717.00,329.72 717.00,329.72
             731.07,332.65 739.59,333.97 747.00,348.00 Z
           M 628.00,235.00
           C 628.00,235.00 628.00,236.00 628.00,236.00
             628.00,236.00 627.00,235.00 627.00,235.00
             627.00,235.00 628.00,235.00 628.00,235.00 Z
           M 627.00,236.00
           C 627.00,236.00 627.00,237.00 627.00,237.00
             627.00,237.00 626.00,236.00 626.00,236.00
             626.00,236.00 627.00,236.00 627.00,236.00 Z
           M 626.00,237.00
           C 626.00,237.00 626.00,238.00 626.00,238.00
             626.00,238.00 625.00,237.00 625.00,237.00
             625.00,237.00 626.00,237.00 626.00,237.00 Z
           M 625.00,238.00
           C 625.00,238.00 625.00,239.00 625.00,239.00
             625.00,239.00 624.00,238.00 624.00,238.00
             624.00,238.00 625.00,238.00 625.00,238.00 Z
           M 624.00,239.00
           C 624.00,239.00 624.00,240.00 624.00,240.00
             624.00,240.00 623.00,239.00 623.00,239.00
             623.00,239.00 624.00,239.00 624.00,239.00 Z
           M 623.00,240.00
           C 623.00,240.00 620.00,244.00 620.00,244.00
             620.00,244.00 623.00,240.00 623.00,240.00 Z
           M 618.00,247.00
           C 618.00,247.00 615.00,251.00 615.00,251.00
             615.00,251.00 618.00,247.00 618.00,247.00 Z
           M 615.00,251.00
           C 615.00,251.00 615.00,252.00 615.00,252.00
             615.00,252.00 614.00,251.00 614.00,251.00
             614.00,251.00 615.00,251.00 615.00,251.00 Z
           M 614.00,252.00
           C 614.00,252.00 614.00,253.00 614.00,253.00
             614.00,253.00 613.00,252.00 613.00,252.00
             613.00,252.00 614.00,252.00 614.00,252.00 Z
           M 612.00,255.00
           C 612.00,255.00 609.00,258.00 609.00,258.00
             609.00,258.00 610.00,255.00 610.00,255.00
             610.00,255.00 612.00,255.00 612.00,255.00 Z
           M 608.00,260.00
           C 608.00,260.00 608.00,261.00 608.00,261.00
             608.00,261.00 607.00,260.00 607.00,260.00
             607.00,260.00 608.00,260.00 608.00,260.00 Z
           M 606.00,263.00
           C 606.00,263.00 606.00,264.00 606.00,264.00
             606.00,264.00 605.00,263.00 605.00,263.00
             605.00,263.00 606.00,263.00 606.00,263.00 Z
           M 605.00,264.00
           C 605.00,264.00 602.00,268.00 602.00,268.00
             602.00,268.00 605.00,264.00 605.00,264.00 Z
           M 602.00,268.00
           C 602.00,268.00 599.00,274.00 599.00,274.00
             598.66,270.66 599.61,270.17 602.00,268.00 Z
           M 598.00,274.00
           C 598.00,274.00 598.00,275.00 598.00,275.00
             598.00,275.00 597.00,274.00 597.00,274.00
             597.00,274.00 598.00,274.00 598.00,274.00 Z
           M 597.00,275.00
           C 597.00,275.00 597.00,276.00 597.00,276.00
             597.00,276.00 596.00,275.00 596.00,275.00
             596.00,275.00 597.00,275.00 597.00,275.00 Z
           M 596.00,276.00
           C 596.00,276.00 596.00,277.00 596.00,277.00
             596.00,277.00 595.00,276.00 595.00,276.00
             595.00,276.00 596.00,276.00 596.00,276.00 Z
           M 595.00,277.00
           C 595.00,277.00 595.00,278.00 595.00,278.00
             595.00,278.00 594.00,277.00 594.00,277.00
             594.00,277.00 595.00,277.00 595.00,277.00 Z
           M 594.00,279.00
           C 594.00,279.00 594.00,280.00 594.00,280.00
             594.00,280.00 593.00,279.00 593.00,279.00
             593.00,279.00 594.00,279.00 594.00,279.00 Z
           M 593.00,280.00
           C 593.00,280.00 592.00,284.00 592.00,284.00
             592.00,284.00 593.00,280.00 593.00,280.00 Z
           M 591.00,284.00
           C 591.00,284.00 582.43,300.00 582.43,300.00
             582.43,300.00 576.00,309.00 576.00,309.00
             579.30,301.21 584.67,289.54 591.00,284.00 Z
           M 794.00,399.00
           C 794.00,399.00 769.53,424.01 769.53,424.01
             769.53,424.01 757.69,450.00 757.69,450.00
             757.69,450.00 739.00,477.00 739.00,477.00
             752.19,476.96 755.01,474.73 765.00,466.61
             780.95,453.65 783.73,447.68 791.14,429.00
             793.79,422.32 797.97,405.14 794.00,399.00 Z" />
             <Path id="scrubcaptransparentlayer1"
        fill={localColours[0] + gradientSteps[1]}
        d="M 505.00,325.00
           C 505.00,325.00 531.00,318.61 531.00,318.61
             544.12,316.25 557.70,316.02 571.00,316.00
             571.00,316.00 584.00,315.08 584.00,315.08
             584.00,315.08 595.00,316.00 595.00,316.00
             595.00,316.00 615.00,318.07 615.00,318.07
             615.00,318.07 624.00,318.07 624.00,318.07
             624.00,318.07 642.00,322.57 642.00,322.57
             642.00,322.57 652.00,325.68 652.00,325.68
             670.08,328.92 696.97,334.79 713.00,343.27
             713.00,343.27 731.00,355.72 731.00,355.72
             740.01,362.78 749.94,369.44 757.39,378.28
             757.39,378.28 763.59,388.00 763.59,388.00
             763.59,388.00 769.54,397.00 769.54,397.00
             771.64,400.73 776.90,408.90 776.93,412.99
             776.97,418.61 770.33,418.43 766.84,427.00
             763.41,435.41 762.35,442.46 757.50,451.00
             757.50,451.00 740.14,475.00 740.14,475.00
             738.12,478.32 736.33,485.01 735.00,489.00
             753.19,487.47 759.22,472.34 773.00,461.90
             773.00,461.90 806.96,438.82 806.96,438.82
             814.92,431.49 813.46,428.20 818.10,421.00
             818.10,421.00 829.59,406.00 829.59,406.00
             833.09,399.56 833.17,392.01 834.46,385.00
             835.71,378.24 838.83,370.04 838.82,363.00
             838.81,355.73 834.79,347.83 832.92,341.00
             830.54,332.32 831.10,328.59 831.00,320.00
             830.79,302.54 822.97,284.87 812.65,271.00
             812.65,271.00 801.90,258.00 801.90,258.00
             794.13,247.72 789.72,232.92 781.00,225.18
             770.41,215.79 758.43,214.58 747.00,209.21
             741.44,206.60 735.52,199.63 725.00,195.46
             725.00,195.46 706.00,190.27 706.00,190.27
             695.52,187.51 681.83,183.77 671.00,184.01
             671.00,184.01 663.00,184.82 663.00,184.82
             663.00,184.82 639.00,182.01 639.00,182.01
             639.00,182.01 601.00,186.70 601.00,186.70
             590.52,186.97 586.72,188.91 577.00,191.11
             577.00,191.11 568.00,192.76 568.00,192.76
             563.76,193.85 547.53,200.47 544.00,202.61
             532.47,209.59 525.74,219.72 516.83,228.91
             516.83,228.91 506.02,239.00 506.02,239.00
             496.47,248.86 489.50,261.20 488.17,275.00
             487.10,286.01 490.58,296.46 495.94,306.00
             495.94,306.00 502.00,315.00 502.00,315.00
             502.00,315.00 505.00,325.00 505.00,325.00 Z" />
             <Path id="scrubcaptransparentlayer2"
        fill={localColours[0] + gradientSteps[1]}
        d="M 505.00,325.00
           C 505.00,325.00 531.00,318.61 531.00,318.61
             544.12,316.25 557.70,316.02 571.00,316.00
             571.00,316.00 584.00,315.08 584.00,315.08
             584.00,315.08 595.00,316.00 595.00,316.00
             595.00,316.00 615.00,318.07 615.00,318.07
             615.00,318.07 624.00,318.07 624.00,318.07
             624.00,318.07 642.00,322.57 642.00,322.57
             642.00,322.57 652.00,325.68 652.00,325.68
             670.08,328.92 696.97,334.79 713.00,343.27
             713.00,343.27 731.00,355.72 731.00,355.72
             740.01,362.78 749.94,369.44 757.39,378.28
             757.39,378.28 763.59,388.00 763.59,388.00
             763.59,388.00 769.54,397.00 769.54,397.00
             771.64,400.73 776.90,408.90 776.93,412.99
             776.96,418.38 770.84,418.46 767.26,426.00
             765.38,429.96 763.35,441.27 756.91,452.00
             756.91,452.00 739.05,477.00 739.05,477.00
             739.05,477.00 736.00,486.00 736.00,486.00
             748.68,479.89 750.88,473.96 761.00,465.44
             770.92,457.08 779.79,453.66 789.79,443.58
             789.79,443.58 800.81,428.00 800.81,428.00
             806.90,420.38 815.31,412.62 820.10,404.00
             820.10,404.00 824.26,395.00 824.26,395.00
             825.69,392.04 827.94,388.12 828.61,385.00
             829.15,382.50 830.04,366.65 829.69,364.00
             828.86,357.64 827.09,355.67 827.00,348.00
             827.00,348.00 827.00,339.00 827.00,339.00
             827.00,339.00 827.73,329.00 827.73,329.00
             827.55,325.55 822.16,302.20 820.68,299.00
             816.58,290.15 811.08,284.75 806.23,277.00
             801.41,269.31 801.30,265.35 794.96,257.09
             794.96,257.09 788.16,249.96 788.16,249.96
             788.16,249.96 780.42,241.21 780.42,241.21
             772.52,233.27 763.06,227.05 754.00,220.57
             748.04,216.31 726.06,200.19 721.00,198.39
             713.56,195.73 701.41,196.14 693.00,194.68
             693.00,194.68 663.00,189.68 663.00,189.68
             663.00,189.68 655.00,188.09 655.00,188.09
             641.74,186.97 628.24,189.01 615.00,190.00
             615.00,190.00 606.00,190.00 606.00,190.00
             606.00,190.00 598.00,191.13 598.00,191.13
             598.00,191.13 589.00,191.13 589.00,191.13
             573.88,193.46 566.26,195.97 553.00,203.34
             550.49,204.73 548.32,205.64 546.00,207.41
             546.00,207.41 527.00,225.56 527.00,225.56
             510.71,239.37 496.04,252.12 496.00,275.00
             495.97,294.94 497.39,292.91 502.08,311.00
             503.64,317.02 502.22,316.44 505.00,325.00 Z" />
<Path id="scrubcaptransparentlayer3"
        fill={localColours[0] + gradientSteps[1]}
        d="M 510.00,322.00
           C 521.99,319.27 525.10,316.02 539.00,316.00
             539.00,316.00 571.00,316.00 571.00,316.00
             571.00,316.00 584.00,315.08 584.00,315.08
             584.00,315.08 595.00,316.00 595.00,316.00
             595.00,316.00 612.00,316.99 612.00,316.99
             612.00,316.99 623.00,316.04 623.00,316.04
             623.00,316.04 634.00,316.91 634.00,316.91
             649.11,317.94 663.49,318.35 678.00,323.36
             683.46,325.24 690.71,329.83 696.00,332.69
             715.87,343.44 712.86,341.42 731.00,355.71
             740.00,362.81 749.93,369.43 757.39,378.28
             757.39,378.28 763.59,388.00 763.59,388.00
             763.59,388.00 769.54,397.00 769.54,397.00
             771.64,400.73 776.90,408.90 776.93,412.99
             776.96,418.38 770.84,418.46 767.26,426.00
             765.38,429.96 763.35,441.27 756.91,452.00
             752.19,459.88 741.84,470.74 739.00,478.00
             739.00,478.00 755.00,463.44 755.00,463.44
             763.69,456.11 771.04,452.13 778.68,443.00
             778.68,443.00 795.60,419.00 795.60,419.00
             801.27,411.88 813.87,399.46 816.67,392.00
             819.80,383.66 819.10,369.17 819.00,360.00
             819.00,360.00 815.18,333.00 815.18,333.00
             815.18,333.00 815.96,323.00 815.96,323.00
             816.22,316.38 814.95,313.08 812.86,307.00
             807.32,290.89 805.05,290.65 796.21,277.00
             796.21,277.00 788.90,266.00 788.90,266.00
             788.90,266.00 785.48,258.00 785.48,258.00
             784.14,255.07 777.40,244.57 775.32,242.09
             767.89,233.19 760.83,232.14 753.00,227.04
             753.00,227.04 743.00,218.63 743.00,218.63
             740.34,216.73 726.33,209.76 723.00,208.46
             718.52,206.71 706.81,205.37 702.00,205.76
             693.15,206.02 695.99,207.84 685.00,205.76
             661.99,201.88 665.98,194.77 646.00,195.00
             620.20,195.30 590.87,210.40 567.00,219.54
             567.00,219.54 558.00,222.48 558.00,222.48
             558.00,222.48 550.00,226.82 550.00,226.82
             543.29,230.25 537.02,232.20 531.67,238.18
             526.13,244.37 524.22,250.87 520.74,258.00
             514.42,270.97 506.67,283.00 507.01,298.00
             507.01,298.00 510.00,322.00 510.00,322.00 Z" />
             <Path id="scrubcaptransparentoutline"
        fill={localColours[0]}
        d="M 776.00,419.00
           C 778.00,417.97 779.57,417.40 780.22,414.94
             780.86,412.53 779.24,409.15 778.21,407.00
             778.21,407.00 769.22,391.00 769.22,391.00
             760.29,374.25 745.04,362.14 730.00,351.26
             722.60,345.90 714.71,339.44 706.00,336.23
             706.00,336.23 672.00,326.91 672.00,326.91
             672.00,326.91 665.00,324.46 665.00,324.46
             665.00,324.46 633.00,316.28 633.00,316.28
             633.00,316.28 605.00,313.83 605.00,313.83
             605.00,313.83 577.00,311.00 577.00,311.00
             561.34,310.82 545.46,312.08 530.00,314.59
             526.02,315.24 512.55,319.45 510.10,318.61
             507.41,317.68 505.99,314.32 504.74,312.00
             504.74,312.00 495.86,296.00 495.86,296.00
             494.17,292.18 491.67,286.06 491.18,282.00
             489.54,268.43 493.78,262.82 500.82,252.00
             500.82,252.00 506.55,243.28 506.55,243.28
             506.55,243.28 520.08,229.91 520.08,229.91
             520.08,229.91 528.59,219.32 528.59,219.32
             530.78,216.94 546.16,203.72 549.00,202.17
             561.96,195.10 568.52,194.88 582.00,191.77
             582.00,191.77 601.00,187.62 601.00,187.62
             601.00,187.62 615.00,186.85 615.00,186.85
             615.00,186.85 633.00,184.03 633.00,184.03
             633.00,184.03 650.00,185.83 650.00,185.83
             650.00,185.83 672.00,187.00 672.00,187.00
             686.25,187.17 696.34,188.81 710.00,192.98
             710.00,192.98 719.00,195.67 719.00,195.67
             729.34,199.77 737.42,207.51 745.00,211.28
             754.17,215.83 765.09,215.82 779.00,228.18
             790.81,238.69 792.14,249.43 799.25,259.00
             799.25,259.00 809.48,271.00 809.48,271.00
             815.24,278.33 822.70,292.09 825.54,301.00
             828.68,310.86 828.88,325.57 829.00,336.00
             829.17,350.43 837.33,354.25 836.62,366.00
             836.20,372.95 833.10,377.64 831.81,384.00
             830.31,391.40 831.83,396.73 827.78,404.00
             827.78,404.00 816.10,419.00 816.10,419.00
             811.66,425.81 812.22,429.76 805.96,435.91
             798.59,443.15 778.05,454.77 769.00,461.30
             755.38,471.13 752.81,483.78 736.00,487.00
             736.00,487.00 736.00,491.00 736.00,491.00
             739.55,490.52 743.79,489.93 747.00,488.32
             754.87,484.34 770.38,464.62 780.00,458.25
             788.52,452.60 804.48,446.18 811.39,438.53
             815.61,433.86 816.28,427.32 819.36,422.00
             822.69,416.26 827.93,413.14 831.00,407.00
             833.52,401.96 833.38,394.62 834.68,389.00
             836.74,380.07 839.85,378.70 840.00,366.00
             840.04,362.39 840.25,357.38 839.15,354.00
             837.82,349.88 834.35,345.40 832.68,338.00
             831.48,332.71 832.07,317.40 832.00,311.00
             831.81,294.85 822.75,280.04 812.68,268.00
             812.68,268.00 803.93,258.00 803.93,258.00
             797.46,249.09 794.19,235.02 782.96,224.09
             770.29,211.75 759.38,212.20 749.00,207.18
             749.00,207.18 724.00,192.52 724.00,192.52
             724.00,192.52 706.00,187.08 706.00,187.08
             697.12,184.35 695.34,182.05 685.00,182.00
             685.00,182.00 667.00,182.00 667.00,182.00
             667.00,182.00 634.00,179.00 634.00,179.00
             634.00,179.00 614.00,181.91 614.00,181.91
             614.00,181.91 605.00,181.91 605.00,181.91
             596.50,182.04 588.21,184.61 580.00,186.63
             567.47,189.70 552.79,193.15 542.04,200.44
             532.96,206.59 521.31,222.79 513.70,230.83
             502.40,242.78 486.73,257.36 486.04,275.00
             485.44,290.20 493.17,300.26 499.74,313.00
             501.31,316.04 504.10,324.82 507.22,325.70
             511.65,326.95 523.00,322.34 528.00,321.29
             538.31,319.12 548.55,318.63 559.00,317.91
             559.00,317.91 569.00,317.00 569.00,317.00
             579.85,316.88 590.28,318.39 601.00,319.71
             601.00,319.71 618.00,321.29 618.00,321.29
             618.00,321.29 643.00,326.34 643.00,326.34
             661.61,330.24 689.09,335.87 706.00,343.82
             713.60,347.39 720.31,352.54 726.96,357.58
             740.23,367.64 753.01,378.18 762.28,392.28
             762.28,392.28 765.86,399.00 765.86,399.00
             765.86,399.00 772.19,410.00 772.19,410.00
             772.19,410.00 776.00,419.00 776.00,419.00 Z" />

    </>
  );
};