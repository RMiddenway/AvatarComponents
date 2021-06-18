import React from "react";
import { Path } from "react-native-svg";
import colors from "../../../../config/colors";

export const ScrubCapTeal = () => {

  const localColours = [colour ? colors[colour] : colors.scrubs_teal, colors.black];
  const gradientSteps = ['40', '80']
  
  return (
    <>
       <Path id="scrubcapfull"
        fill={localColours[0]}
        
        d="M 785.00,313.00
           C 787.52,313.45 790.47,314.19 793.00,313.56
             799.98,311.80 803.42,302.38 804.00,296.00
             806.93,299.44 808.94,302.64 810.32,307.00
             811.13,309.55 810.95,313.25 813.43,314.81
             816.67,316.84 823.09,313.82 820.63,307.00
             818.37,300.73 815.06,297.23 811.68,292.00
             811.68,292.00 807.64,284.00 807.64,284.00
             807.64,284.00 803.00,277.00 803.00,277.00
             810.20,277.66 814.02,280.42 820.00,284.24
             822.08,285.57 826.15,289.00 828.69,288.26
             832.94,287.01 829.68,281.09 827.87,279.26
             822.48,273.81 818.29,273.02 811.00,273.00
             816.20,270.35 822.77,269.54 826.47,265.66
             834.20,257.55 829.97,248.00 820.00,248.26
             812.35,248.45 806.31,254.03 801.00,259.00
             801.00,242.56 797.48,233.47 790.25,219.00
             784.40,207.30 777.28,195.36 767.96,186.04
             757.86,175.94 749.94,172.15 738.00,165.57
             738.00,165.57 720.00,156.50 720.00,156.50
             720.00,156.50 709.00,152.92 709.00,152.92
             695.41,148.26 680.21,142.66 666.00,140.44
             666.00,140.44 632.00,137.75 632.00,137.75
             632.00,137.75 622.00,137.75 622.00,137.75
             612.85,138.11 582.57,142.08 575.00,145.34
             564.21,149.98 554.41,158.55 546.00,166.56
             531.95,179.94 521.18,192.48 514.32,211.00
             512.33,216.37 509.10,227.41 508.30,233.00
             508.30,233.00 507.49,246.00 507.49,246.00
             507.49,246.00 499.30,284.00 499.30,284.00
             498.97,287.42 499.57,289.65 499.95,293.00
             502.14,312.50 513.24,327.49 531.00,336.02
             531.00,336.02 562.00,345.83 562.00,345.83
             582.87,352.76 585.12,350.96 605.00,354.28
             605.00,354.28 616.00,356.56 616.00,356.56
             616.00,356.56 654.00,360.00 654.00,360.00
             654.00,360.00 672.00,360.00 672.00,360.00
             672.00,360.00 699.00,358.00 699.00,358.00
             704.63,357.93 714.62,357.12 720.00,355.75
             720.00,355.75 727.00,353.47 727.00,353.47
             727.00,353.47 732.83,352.76 732.83,352.76
             732.83,352.76 746.00,348.79 746.00,348.79
             759.80,343.26 779.18,326.74 785.00,313.00 Z
           M 823.00,256.00
           C 820.59,262.32 813.15,264.05 807.00,265.00
             811.02,258.18 814.86,254.80 823.00,256.00 Z
           M 796.00,298.00
           C 796.00,298.00 796.00,299.00 796.00,299.00
             796.00,299.00 795.00,298.00 795.00,298.00
             795.00,298.00 796.00,298.00 796.00,298.00 Z" />
             <Path id="scrubcapmid"
        fill={localColours[1] + gradientSteps[0]}
        d="M 623.00,136.00
           C 620.22,140.93 618.00,139.67 613.00,140.29
             613.00,140.29 592.00,143.26 592.00,143.26
             578.08,145.94 559.27,158.53 549.00,168.09
             522.51,192.73 512.18,229.73 504.79,264.00
             501.49,279.31 498.92,286.13 503.15,302.00
             504.02,305.25 505.54,310.15 507.22,313.00
             518.98,332.96 538.52,337.40 559.00,343.42
             568.50,346.21 581.01,351.02 591.00,350.00
             591.00,350.00 592.00,353.00 592.00,353.00
             598.28,351.09 613.28,352.34 618.00,357.00
             630.81,354.70 635.66,357.98 648.00,358.00
             648.00,358.00 675.00,358.00 675.00,358.00
             700.91,357.96 739.51,349.76 761.00,335.10
             766.04,331.67 773.72,325.63 777.54,321.00
             777.54,321.00 782.75,314.11 782.75,314.11
             787.09,309.28 789.27,313.11 793.98,311.40
             800.37,309.07 803.31,298.10 803.00,292.00
             814.45,297.62 815.00,303.36 815.00,315.00
             817.10,313.36 819.21,311.99 819.30,309.00
             819.40,305.11 813.52,297.23 811.30,294.00
             806.43,286.92 809.41,286.95 801.00,277.00
             801.00,277.00 808.00,279.00 808.00,279.00
             808.00,279.00 809.00,276.00 809.00,276.00
             809.00,276.00 829.00,288.00 829.00,288.00
             830.13,281.32 823.01,276.13 817.00,274.56
             814.38,273.87 810.75,274.00 808.00,274.00
             814.22,268.08 823.27,270.05 827.67,261.00
             830.45,255.27 825.88,250.96 820.00,251.66
             811.38,252.68 806.89,257.17 801.00,263.00
             800.54,257.40 799.14,246.25 797.71,241.00
             795.46,232.69 792.23,226.55 788.36,219.00
             779.12,200.98 772.53,190.44 756.00,177.90
             736.81,163.34 702.48,151.05 679.00,144.88
             679.00,144.88 658.00,140.72 658.00,140.72
             658.00,140.72 650.00,140.72 650.00,140.72
             650.00,140.72 639.00,140.00 639.00,140.00
             636.23,139.97 630.46,140.28 628.09,139.42
             626.20,138.73 624.57,137.22 623.00,136.00 Z
           M 626.00,149.28
           C 634.71,148.47 650.01,150.62 659.00,151.87
             659.00,151.87 678.00,154.67 678.00,154.67
             696.70,158.72 723.32,169.48 740.00,178.86
             740.00,178.86 754.00,187.81 754.00,187.81
             762.46,193.09 776.60,206.23 779.36,216.00
             781.16,222.37 777.96,232.20 770.98,233.81
             763.14,235.63 755.77,233.63 748.00,232.42
             748.00,232.42 713.00,226.80 713.00,226.80
             713.00,226.80 701.00,225.83 701.00,225.83
             701.00,225.83 688.00,223.59 688.00,223.59
             688.00,223.59 679.00,222.56 679.00,222.56
             679.00,222.56 645.00,214.47 645.00,214.47
             645.00,214.47 603.00,203.65 603.00,203.65
             603.00,203.65 568.00,190.57 568.00,190.57
             563.02,188.63 556.92,185.76 555.61,180.00
             554.01,172.93 564.09,167.78 569.00,164.68
             592.25,150.03 600.83,152.90 626.00,149.28 Z
           M 547.00,184.00
           C 547.00,184.00 565.00,192.27 565.00,192.27
             565.00,192.27 610.00,211.00 610.00,211.00
             610.00,211.00 652.00,221.88 652.00,221.88
             652.00,221.88 694.00,231.56 694.00,231.56
             694.00,231.56 710.00,233.43 710.00,233.43
             710.00,233.43 721.00,235.72 721.00,235.72
             721.00,235.72 766.00,241.16 766.00,241.16
             766.00,241.16 794.00,244.14 794.00,244.14
             786.92,247.26 778.50,245.21 771.00,244.14
             771.00,244.14 731.00,239.28 731.00,239.28
             731.00,239.28 719.00,237.92 719.00,237.92
             719.00,237.92 706.00,235.29 706.00,235.29
             706.00,235.29 670.00,229.58 670.00,229.58
             670.00,229.58 651.00,224.37 651.00,224.37
             616.77,215.82 606.04,213.56 573.00,198.86
             573.00,198.86 557.00,191.74 557.00,191.74
             557.00,191.74 546.00,185.00 546.00,185.00
             546.00,185.00 547.00,184.00 547.00,184.00 Z
           M 793.00,247.00
           C 793.00,254.81 793.20,273.17 790.85,280.00
             789.14,285.00 785.74,286.30 783.56,292.00
             780.80,299.24 783.91,301.58 779.82,305.47
             777.34,307.83 771.31,310.13 768.00,311.76
             753.70,318.78 738.69,321.93 723.00,324.13
             714.66,325.30 706.45,326.99 698.00,327.00
             673.23,327.04 648.50,326.71 624.00,322.57
             624.00,322.57 611.00,319.42 611.00,319.42
             611.00,319.42 570.00,308.00 570.00,308.00
             570.00,308.00 555.00,303.57 555.00,303.57
             555.00,303.57 533.00,294.00 533.00,294.00
             528.71,292.16 516.15,285.73 513.33,282.62
             509.50,278.40 513.78,267.08 515.12,262.00
             520.08,243.10 526.65,224.93 534.42,207.00
             536.17,202.98 542.03,188.73 546.18,187.82
             548.59,187.30 560.66,194.66 564.00,196.14
             580.30,203.34 596.94,210.87 614.00,216.12
             614.00,216.12 650.00,225.37 650.00,225.37
             650.00,225.37 688.00,234.39 688.00,234.39
             688.00,234.39 707.00,236.61 707.00,236.61
             707.00,236.61 721.00,239.56 721.00,239.56
             721.00,239.56 737.00,241.29 737.00,241.29
             755.61,243.60 774.22,247.00 793.00,247.00 Z
           M 805.00,266.00
           C 806.92,261.10 815.49,251.28 821.55,255.21
             824.90,257.38 823.70,263.67 813.00,265.41
             809.48,265.98 808.50,265.97 805.00,266.00 Z
           M 799.00,278.00
           C 799.00,278.00 789.53,291.00 789.53,291.00
             789.53,291.00 785.00,306.00 785.00,306.00
             783.91,303.26 784.00,301.92 784.00,299.00
             784.00,288.23 789.08,281.99 799.00,278.00 Z
           M 513.00,286.00
           C 524.22,294.19 530.25,295.91 542.00,301.47
             542.00,301.47 552.00,306.29 552.00,306.29
             552.00,306.29 577.00,314.02 577.00,314.02
             577.00,314.02 627.00,326.58 627.00,326.58
             627.00,326.58 651.00,329.17 651.00,329.17
             651.00,329.17 671.00,331.00 671.00,331.00
             671.00,331.00 698.00,331.00 698.00,331.00
             710.79,330.98 741.42,325.33 754.00,321.56
             754.00,321.56 771.00,315.00 771.00,315.00
             768.38,319.67 763.46,323.05 759.00,325.91
             748.06,332.93 735.39,336.89 723.00,340.42
             695.71,348.21 682.61,348.04 655.00,348.00
             655.00,348.00 638.00,347.00 638.00,347.00
             616.17,346.97 589.75,342.86 569.00,336.00
             557.32,332.14 543.54,325.93 533.00,319.60
             524.20,314.32 520.07,312.92 516.01,303.00
             514.09,298.30 511.36,290.95 513.00,286.00 Z
           M 795.00,292.00
           C 795.00,292.00 792.00,302.00 792.00,302.00
             792.00,302.00 798.00,296.00 798.00,296.00
             798.00,296.00 796.61,300.98 796.61,300.98
             794.37,306.44 790.96,305.96 789.91,302.85
             788.42,298.44 791.30,293.98 795.00,292.00 Z
           M 553.00,304.00
           C 553.00,304.00 553.00,305.00 553.00,305.00
             553.00,305.00 552.00,304.00 552.00,304.00
             552.00,304.00 553.00,304.00 553.00,304.00 Z
           M 559.00,306.00
           C 559.00,306.00 559.00,307.00 559.00,307.00
             559.00,307.00 558.00,306.00 558.00,306.00
             558.00,306.00 559.00,306.00 559.00,306.00 Z
           M 569.00,309.00
           C 569.00,309.00 569.00,310.00 569.00,310.00
             569.00,310.00 568.00,309.00 568.00,309.00
             568.00,309.00 569.00,309.00 569.00,309.00 Z
           M 572.00,310.00
           C 572.00,310.00 572.00,311.00 572.00,311.00
             572.00,311.00 571.00,310.00 571.00,310.00
             571.00,310.00 572.00,310.00 572.00,310.00 Z
           M 575.00,311.00
           C 575.00,311.00 575.00,312.00 575.00,312.00
             575.00,312.00 574.00,311.00 574.00,311.00
             574.00,311.00 575.00,311.00 575.00,311.00 Z
           M 767.00,314.00
           C 767.00,314.00 767.00,315.00 767.00,315.00
             767.00,315.00 766.00,314.00 766.00,314.00
             766.00,314.00 767.00,314.00 767.00,314.00 Z
           M 772.00,314.00
           C 772.00,314.00 772.00,315.00 772.00,315.00
             772.00,315.00 771.00,314.00 771.00,314.00
             771.00,314.00 772.00,314.00 772.00,314.00 Z
           M 765.00,315.00
           C 765.00,315.00 765.00,316.00 765.00,316.00
             765.00,316.00 764.00,315.00 764.00,315.00
             764.00,315.00 765.00,315.00 765.00,315.00 Z
           M 599.00,318.00
           C 599.00,318.00 599.00,319.00 599.00,319.00
             599.00,319.00 598.00,318.00 598.00,318.00
             598.00,318.00 599.00,318.00 599.00,318.00 Z
           M 756.00,319.00
           C 751.41,321.72 741.38,323.88 736.00,324.00
             736.00,324.00 756.00,319.00 756.00,319.00 Z
           M 736.00,324.00
           C 736.00,324.00 731.00,325.00 731.00,325.00
             731.00,325.00 736.00,324.00 736.00,324.00 Z
           M 731.00,325.00
           C 731.00,325.00 724.00,326.00 724.00,326.00
             724.00,326.00 731.00,325.00 731.00,325.00 Z
           M 642.00,326.00
           C 642.00,326.00 642.00,327.00 642.00,327.00
             642.00,327.00 641.00,326.00 641.00,326.00
             641.00,326.00 642.00,326.00 642.00,326.00 Z
           M 644.00,326.00
           C 644.00,326.00 644.00,327.00 644.00,327.00
             644.00,327.00 643.00,326.00 643.00,326.00
             643.00,326.00 644.00,326.00 644.00,326.00 Z
           M 724.00,326.00
           C 724.00,326.00 711.00,328.00 711.00,328.00
             711.00,328.00 724.00,326.00 724.00,326.00 Z
           M 648.00,327.00
           C 648.00,327.00 648.00,328.00 648.00,328.00
             648.00,328.00 647.00,327.00 647.00,327.00
             647.00,327.00 648.00,327.00 648.00,327.00 Z
           M 710.00,328.00
           C 710.00,328.00 704.00,329.00 704.00,329.00
             704.00,329.00 710.00,328.00 710.00,328.00 Z" />
             <Path id="scrubcapdark"
        fill={localColours[1] + gradientSteps[1]}
        d="M 507.00,251.00
           C 509.62,246.59 510.68,239.20 512.34,234.00
             515.98,222.61 520.08,210.73 525.37,200.00
             536.40,177.64 556.81,158.83 579.00,147.81
             579.00,147.81 598.00,141.00 598.00,141.00
             593.31,139.28 589.55,141.37 585.00,142.59
             571.07,146.30 569.46,147.64 558.00,156.58
             536.83,173.07 521.42,190.06 512.97,216.00
             512.97,216.00 510.08,224.00 510.08,224.00
             510.08,224.00 509.45,230.00 509.45,230.00
             508.20,237.04 505.88,243.64 507.00,251.00 Z
           M 547.00,184.00
           C 553.23,190.94 560.70,193.44 569.00,197.00
             569.00,197.00 582.00,202.99 582.00,202.99
             582.00,202.99 603.00,210.81 603.00,210.81
             617.24,216.31 632.21,219.68 647.00,223.37
             647.00,223.37 687.00,232.75 687.00,232.75
             687.00,232.75 708.00,235.44 708.00,235.44
             708.00,235.44 722.00,238.25 722.00,238.25
             722.00,238.25 739.00,240.15 739.00,240.15
             756.12,242.20 772.71,245.00 790.00,245.00
             790.00,245.00 759.00,240.72 759.00,240.72
             759.00,240.72 725.00,236.57 725.00,236.57
             725.00,236.57 708.00,233.28 708.00,233.28
             708.00,233.28 692.00,231.39 692.00,231.39
             676.47,228.63 624.13,216.04 610.00,211.14
             610.00,211.14 563.00,191.69 563.00,191.69
             563.00,191.69 547.00,184.00 547.00,184.00 Z
           M 801.00,263.00
           C 806.45,258.80 814.27,250.46 822.00,251.60
             824.09,251.91 827.70,254.05 830.00,255.00
             824.02,240.21 803.42,251.67 801.00,263.00 Z
           M 505.00,251.00
           C 505.00,251.00 505.00,252.00 505.00,252.00
             505.00,252.00 506.00,251.00 506.00,251.00
             506.00,251.00 505.00,251.00 505.00,251.00 Z
           M 801.00,256.00
           C 801.00,256.00 801.00,257.00 801.00,257.00
             801.00,257.00 802.00,256.00 802.00,256.00
             802.00,256.00 801.00,256.00 801.00,256.00 Z
           M 816.00,257.00
           C 816.00,257.00 816.00,258.00 816.00,258.00
             816.00,258.00 817.00,257.00 817.00,257.00
             817.00,257.00 816.00,257.00 816.00,257.00 Z
           M 822.00,258.00
           C 822.00,258.00 814.00,265.00 814.00,265.00
             818.36,264.49 822.53,263.23 822.00,258.00 Z
           M 811.00,272.00
           C 811.00,272.00 811.00,273.00 811.00,273.00
             811.00,273.00 812.00,272.00 812.00,272.00
             812.00,272.00 811.00,272.00 811.00,272.00 Z
           M 815.00,273.00
           C 815.00,273.00 815.00,274.00 815.00,274.00
             815.00,274.00 816.00,273.00 816.00,273.00
             816.00,273.00 815.00,273.00 815.00,273.00 Z
           M 819.00,273.00
           C 821.52,277.58 826.29,280.88 831.00,283.00
             828.63,278.23 824.01,274.73 819.00,273.00 Z
           M 784.00,305.00
           C 784.00,305.00 788.82,292.00 788.82,292.00
             788.82,292.00 798.00,279.00 798.00,279.00
             784.91,283.46 784.00,293.24 784.00,305.00 Z
           M 803.00,292.00
           C 803.00,292.00 803.00,297.00 803.00,297.00
             803.00,297.00 805.00,298.00 805.00,298.00
             805.00,298.00 806.00,297.00 806.00,297.00
             806.00,297.00 809.52,305.00 809.52,305.00
             811.42,310.25 810.64,312.73 815.00,317.00
             815.00,306.07 815.48,296.25 803.00,292.00 Z
           M 792.00,293.00
           C 790.93,295.86 789.44,299.76 790.32,302.85
             791.22,306.04 794.87,306.75 796.00,300.00
             796.00,300.00 792.00,302.00 792.00,302.00
             792.00,302.00 794.00,293.00 794.00,293.00
             794.00,293.00 792.00,293.00 792.00,293.00 Z
           M 785.00,310.00
           C 771.57,330.14 753.85,341.70 731.00,348.97
             722.83,351.57 714.47,353.42 706.00,354.73
             701.59,355.41 696.72,355.08 694.00,358.88
             694.00,358.88 701.83,358.88 701.83,358.88
             708.70,357.56 707.63,355.43 716.00,358.00
             719.88,354.15 729.96,351.50 735.00,354.00
             738.51,350.43 747.33,348.29 753.00,345.23
             763.41,339.62 770.46,332.80 778.09,323.91
             781.36,320.11 785.68,314.85 787.00,310.00
             787.00,310.00 785.00,310.00 785.00,310.00 Z" />
    </>
  );
};