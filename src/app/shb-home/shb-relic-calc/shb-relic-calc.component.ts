import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shb-relic-calc',
  templateUrl: './shb-relic-calc.component.html',
  styleUrls: ['./shb-relic-calc.component.css'],
})
export class ShbRelicCalcComponent implements OnInit {
  isPLD: boolean = true;
  isWAR: boolean = true;
  isDRK: boolean = true;
  isGNB: boolean = true;
  isWHM: boolean = true;
  isSCH: boolean = true;
  isAST: boolean = true;
  isMNK: boolean = true;
  isDRG: boolean = true;
  isNIN: boolean = true;
  isSAM: boolean = true;
  isBRD: boolean = true;
  isMCH: boolean = true;
  isDNC: boolean = true;
  isBLM: boolean = true;
  isSMN: boolean = true;
  isRDM: boolean = true;

  isOneTimeSteps: boolean = false;

  numActive: number = 17;

  constructor() {}

  ngOnInit(): void {}

    selectAll() {
        this.isPLD = true;
        this.isWAR = true;
        this.isDRK = true;
        this.isGNB = true;
        this.isWHM = true;
        this.isSCH = true;
        this.isAST = true;
        this.isMNK = true;
        this.isDRG = true;
        this.isNIN = true;
        this.isSAM = true;
        this.isBRD = true;
        this.isMCH = true;
        this.isDNC = true;
        this.isBLM = true;
        this.isSMN = true;
        this.isRDM = true;

        this.numActive = 17;
    }

    unselectAll() {
        this.isPLD = false;
        this.isWAR = false;
        this.isDRK = false;
        this.isGNB = false;
        this.isWHM = false;
        this.isSCH = false;
        this.isAST = false;
        this.isMNK = false;
        this.isDRG = false;
        this.isNIN = false;
        this.isSAM = false;
        this.isBRD = false;
        this.isMCH = false;
        this.isDNC = false;
        this.isBLM = false;
        this.isSMN = false;
        this.isRDM = false;

        this.numActive = 0;
    }

    toggleOneTimeSteps() {
        this.isOneTimeSteps = !this.isOneTimeSteps;
    }

  toggleJob(job: string): void {
    switch (job) {
      case 'PLD':
        if (this.isPLD) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isPLD = !this.isPLD;
        break;

      case 'WAR':
        if (this.isWAR) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isWAR = !this.isWAR;
        break;

      case 'DRK':
        if (this.isDRK) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isDRK = !this.isDRK;
        break;

      case 'GNB':
        if (this.isGNB) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isGNB = !this.isGNB;
        break;

      case 'WHM':
        if (this.isWHM) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isWHM = !this.isWHM;
        break;

      case 'SCH':
        if (this.isSCH) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isSCH = !this.isSCH;
        break;

      case 'AST':
        if (this.isAST) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isAST = !this.isAST;
        break;

      case 'MNK':
        if (this.isMNK) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isMNK = !this.isMNK;
        break;

      case 'DRG':
        if (this.isDRG) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isDRG = !this.isDRG;
        break;

      case 'NIN':
        if (this.isNIN) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isNIN = !this.isNIN;
        break;

      case 'SAM':
        if (this.isSAM) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isSAM = !this.isSAM;
        break;

      case 'BRD':
        if (this.isBRD) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isBRD = !this.isBRD;
        break;

      case 'MCH':
        if (this.isMCH) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isMCH = !this.isMCH;
        break;

      case 'DNC':
        if (this.isDNC) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isDNC = !this.isDNC;
        break;

      case 'BLM':
        if (this.isBLM) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isBLM = !this.isBLM;
        break;

      case 'SMN':
        if (this.isSMN) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isSMN = !this.isSMN;
        break;

      case 'RDM':
        if (this.isRDM) {
          this.numActive -= 1;
        } else {
          this.numActive += 1;
        }
        this.isRDM = !this.isRDM;
        break;
    }
  }
}
