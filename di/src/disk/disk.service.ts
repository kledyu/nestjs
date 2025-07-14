import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('파워 서비스에서 20 와트 전력 소비');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
