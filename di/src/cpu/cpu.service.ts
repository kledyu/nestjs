import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // PowerService 인스턴스를 CPU 생성자에 주입
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('파워 서비스에서 10 와트 전력 소비');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
