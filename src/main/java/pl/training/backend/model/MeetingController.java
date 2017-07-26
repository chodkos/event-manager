package pl.training.backend.model;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.security.dto.UserDto;
import pl.training.backend.security.dto.UsersPageDto;
import pl.training.backend.security.entity.User;

import java.util.List;

/**
 * Created by Raynor on 2017-07-26.
 */

@Api(description = "Meetings resource")
@RestController
public class MeetingController {

    private Mapper mapper;
    private MeetingService meetingService;
    private UriBuilder uriBuilder = new UriBuilder();


    public MeetingController(Mapper mapper, MeetingService meetingService) {
        this.mapper = mapper;
        this.meetingService = meetingService;
    }

  /*  @ApiOperation(value = "Get meetings", response = MeetingPageDto.class)
    @RequestMapping(method = RequestMethod.GET)*/
  @RequestMapping(value = UriBuilder.PREFIX + "/meetings")
    public MeetingPageDto getMeetings(
            @RequestParam(required = false, defaultValue = "0", name = "pageNumber") int pageNumber,
            @RequestParam(required = false, defaultValue = "10", name = "pageSize") int pageSize) {
        ResultPage<Meeting> resultPage = meetingService.getMeetings(pageNumber, pageSize);
        List<MeetingDto> meetingDtos = mapper.map(resultPage.getContent(), MeetingDto.class);
        return new MeetingPageDto(meetingDtos, resultPage.getPageNumber(), resultPage.getTotalPages());
    }

}
