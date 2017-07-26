package pl.training.backend.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by Raynor on 2017-07-26.
 */
@ApiModel(value = "Meeting")
@Data
public class MeetingDto {

    @ApiModelProperty(required = true)
    private String name;
    @ApiModelProperty(required = true)
    private String address;
  /*  @ApiModelProperty(required = true)
    private Date date;*/
    @ApiModelProperty(required = true)
    private String description;


}
